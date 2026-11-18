import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Box, Grid } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import content from '@/content/content'
import type { Violations } from '@/api/inquiries'
import FieldError from '@/components/FieldError'
import PhotoUpload from '@/components/PhotoUpload'
import PillButton from '@/components/PillButton'
import { useSendInquiry } from '@/hooks/useSendInquiry'
import { colors } from '@/theme/theme'
import { hoverDarken } from '@/theme/interactions'
import { inlineLink, text, visuallyHidden } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

type FieldName = keyof typeof content.inquiry.form.fields

// Pole formuláře v pořadí podle mobilního návrhu; twoColumnOrder určuje pořadí ve dvou sloupcích
const fieldConfig: { name: FieldName; type: string; required: boolean; autoComplete?: string; twoColumnOrder: number }[] = [
  { name: 'name', type: 'text', required: true, autoComplete: 'name', twoColumnOrder: 1 },
  { name: 'company', type: 'text', required: false, autoComplete: 'organization', twoColumnOrder: 2 },
  { name: 'phone', type: 'tel', required: true, autoComplete: 'tel', twoColumnOrder: 3 },
  { name: 'email', type: 'email', required: true, autoComplete: 'email', twoColumnOrder: 5 },
  { name: 'location', type: 'text', required: true, autoComplete: 'address-level2', twoColumnOrder: 4 },
  { name: 'frequency', type: 'text', required: false, twoColumnOrder: 6 },
]

const emptyValues: Record<FieldName, string> = {
  name: '',
  company: '',
  phone: '',
  location: '',
  email: '',
  frequency: '',
  description: '',
}

// Pole, u kterých se zobrazují chyby z API (ostatní jdou do obecné hlášky)
const fieldKeys = new Set<string>([...fieldConfig.map((field) => field.name), 'description', 'consent'])

// Rozdělení chyb z API na chyby polí, chyby fotek a ostatní
function splitViolations(violations: Violations) {
  const fields: Violations = {}
  const photos: Record<number, string[]> = {}
  const other: string[] = []
  Object.entries(violations).forEach(([key, messages]) => {
    const photoMatch = key.match(/^photos\[(\d+)\]$/)
    if (fieldKeys.has(key)) fields[key] = messages
    else if (photoMatch) photos[Number(photoMatch[1])] = messages
    else other.push(...messages)
  })
  return { fields, photos, other }
}

// Zvýraznění pole s chybou
const errorSx = (hasError: boolean): SxProps<Theme> => (hasError ? { boxShadow: `0 0 0 2px ${colors.error}`, '&:focus-visible': { boxShadow: `0 0 0 2px ${colors.error}` } } : {})

// Společný vzhled vstupních polí
const inputSx: SxProps<Theme> = {
  ...text.input,
  width: '100%',
  height: '59px',
  px: fluid(32, 35),
  border: 0,
  borderRadius: '30px',
  bgcolor: colors.lightGreen,
  color: colors.darkGreen,
  outline: 'none',
  '&::placeholder': { color: colors.darkGreen, opacity: 1 },
  '&:focus-visible': { boxShadow: `0 0 0 2px ${colors.green}` },
}

// Poptávkový formulář
export default function InquiryForm() {
  const { form } = content.inquiry
  const navigate = useNavigate()
  const [values, setValues] = useState(emptyValues)
  // Zkomprimované fotky připravené k odeslání
  const [photos, setPhotos] = useState<File[]>([])
  const [consent, setConsent] = useState(false)
  // Honeypot proti robotům
  const [website, setWebsite] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Violations>({})
  const [photoErrors, setPhotoErrors] = useState<Record<number, string[]>>({})
  const [formError, setFormError] = useState<string[]>([])
  const { send, sending } = useSendInquiry()

  // Odebrání chyby pole po jeho úpravě
  const clearFieldError = (name: string) =>
    setFieldErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    clearFieldError(e.target.name)
  }

  const onPhotosChange = (next: File[]) => {
    setPhotos(next)
    setPhotoErrors({})
    clearFieldError('photos')
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending) return
    setFormError([])
    const result = await send({ fields: values, photos, consent, website })

    if (result.ok) {
      window.umami?.track('poptavka-odeslana')
      navigate(content.paths.inquirySent)
      return
    }
    if ('violations' in result) {
      const { fields, photos: photoViolations, other } = splitViolations(result.violations)
      setFieldErrors(fields)
      setPhotoErrors(photoViolations)
      setFormError([form.errors.invalid, ...other])
      // Přesun na první pole s chybou
      const firstField = [...fieldConfig.map((field) => field.name), 'description', 'consent'].find((name) => fields[name])
      const firstId = firstField ? `inquiry-${firstField}` : Object.keys(photoViolations).length ? `inquiry-photo-${Object.keys(photoViolations)[0]}` : null
      if (firstId) document.getElementById(firstId)?.focus()
      return
    }
    setFormError([result.error === 'rateLimit' ? (result.detail ?? form.errors.rateLimit) : form.errors.server])
  }

  return (
    <Box component="form" onSubmit={onSubmit} aria-labelledby="inquiry-form-title" aria-busy={sending} sx={{ position: 'relative' }}>
      <Box component="h2" id="inquiry-form-title" sx={{ ...text.heading, fontSize: '24px', lineHeight: '31px', m: 0, color: colors.green, textAlign: 'center' }}>
        {form.title}
      </Box>
      <Grid container columnSpacing={fluid(12, 24)} rowSpacing={fluid(12, 23)} sx={{ mt: fluid(20, 33) }}>
        {fieldConfig.map((field) => (
          <Grid key={field.name} size={{ xs: 12, sm: 6, md: 12, lg: 6 }} sx={{ order: { xs: 0, sm: field.twoColumnOrder, md: 0, lg: field.twoColumnOrder } }}>
            <Box component="label" htmlFor={`inquiry-${field.name}`} sx={visuallyHidden}>
              {form.fields[field.name]}
            </Box>
            <Box
              component="input"
              id={`inquiry-${field.name}`}
              name={field.name}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              placeholder={form.fields[field.name]}
              value={values[field.name]}
              onChange={onChange}
              aria-invalid={fieldErrors[field.name] ? true : undefined}
              aria-describedby={fieldErrors[field.name] ? `inquiry-${field.name}-error` : undefined}
              sx={{ ...inputSx, ...errorSx(!!fieldErrors[field.name]) } as SxProps<Theme>}
            />
            <FieldError id={`inquiry-${field.name}-error`} messages={fieldErrors[field.name]} />
          </Grid>
        ))}
        <Grid size={12} sx={{ order: { xs: 0, sm: 7, md: 0, lg: 7 } }}>
          <Box component="label" htmlFor="inquiry-description" sx={visuallyHidden}>
            {form.fields.description}
          </Box>
          <Box
            component="textarea"
            id="inquiry-description"
            name="description"
            required
            placeholder={form.fields.description}
            value={values.description}
            onChange={onChange}
            aria-invalid={fieldErrors.description ? true : undefined}
            aria-describedby={fieldErrors.description ? 'inquiry-description-error' : undefined}
            sx={{ ...inputSx, display: 'block', height: fluid(348, 165), pt: '20px', resize: 'vertical', ...errorSx(!!fieldErrors.description) } as SxProps<Theme>}
          />
          <FieldError id="inquiry-description-error" messages={fieldErrors.description} />
        </Grid>
        <Grid size={12} sx={{ order: { xs: 0, sm: 8, md: 0, lg: 8 }, mt: { xs: '18px', md: 0 } }}>
          <PhotoUpload photos={photos} onChange={onPhotosChange} fieldSx={inputSx} errors={photoErrors} />
          <FieldError id="inquiry-photos-error" messages={fieldErrors.photos} />
        </Grid>
      </Grid>
      <Box
        component="label"
        sx={{ ...text.small, display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'center' }, gap: '11px', mt: fluid(30, 34), cursor: 'pointer' }}
      >
        <Box
          component="input"
          type="checkbox"
          id="inquiry-consent"
          required
          checked={consent}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setConsent(e.target.checked)
            clearFieldError('consent')
          }}
          aria-invalid={fieldErrors.consent ? true : undefined}
          aria-describedby={fieldErrors.consent ? 'inquiry-consent-error' : undefined}
          sx={{
            appearance: 'none',
            flexShrink: 0,
            width: '26px',
            height: '26px',
            m: 0,
            border: `1px solid ${colors.darkGreen}`,
            borderRadius: '50%',
            bgcolor: colors.lightGreen,
            cursor: 'pointer',
            ...hoverDarken,
            '&:checked': { background: `radial-gradient(circle, ${colors.green} 0 7px, ${colors.lightGreen} 8px)` },
            ...(fieldErrors.consent && { borderColor: colors.error, boxShadow: `0 0 0 1px ${colors.error}` }),
            '&:focus-visible': { outline: `2px solid ${colors.green}`, outlineOffset: '2px' },
          }}
        />
        <span>
          {form.consent.before}
          <Box component={RouterLink} to={content.paths.privacy} sx={inlineLink}>
            {form.consent.privacyLink}
          </Box>
          {form.consent.after}
        </span>
      </Box>
      <Box sx={{ textAlign: { xs: 'left', md: 'center' } }}>
        <FieldError id="inquiry-consent-error" messages={fieldErrors.consent} />
      </Box>
      {/* Honeypot: skryté pole pro roboty, člověk ho nevidí ani do něj nepřejde tabulátorem */}
      <Box component="label" aria-hidden sx={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }}>
        {form.honeypotLabel}
        <Box
          component="input"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setWebsite(e.target.value)}
        />
      </Box>
      {formError.length > 0 && (
        <Box role="alert" sx={{ ...text.small, mt: fluid(20, 23), color: colors.error, textAlign: 'center' }}>
          {formError.map((message) => (
            <Box component="p" key={message} sx={{ m: 0 }}>
              {message}
            </Box>
          ))}
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: '70px', md: fluid(20, 23) } }}>
        <PillButton label={sending ? form.sending : form.submit} type="submit" variant="green" disabled={sending} sx={{ width: { xs: '265px', md: 'auto' } }} />
      </Box>
    </Box>
  )
}
