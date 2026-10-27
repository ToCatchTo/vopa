import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Box, Grid } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import content from '@/content/content'
import PillButton from '@/components/PillButton'
import { colors } from '@/theme/theme'
import { inlineLink, text, visuallyHidden } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

type FieldName = keyof typeof content.inquiry.form.fields

// Pole formuláře v pořadí podle návrhu
const fieldConfig: { name: FieldName; type: string; required: boolean; autoComplete?: string }[] = [
  { name: 'name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'company', type: 'text', required: false, autoComplete: 'organization' },
  { name: 'phone', type: 'tel', required: true, autoComplete: 'tel' },
  { name: 'location', type: 'text', required: true, autoComplete: 'address-level2' },
  { name: 'email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'frequency', type: 'text', required: false },
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

// Společný vzhled vstupních polí
const inputSx: SxProps<Theme> = {
  ...text.input,
  width: '100%',
  height: fluid(52, 59),
  px: fluid(20, 35),
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
  const [fileName, setFileName] = useState('')
  const [consent, setConsent] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => setFileName(e.target.files?.[0]?.name ?? '')

  // Zatím bez odeslání na backend, pouze přesměrování na potvrzení
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(content.paths.inquirySent)
  }

  return (
    <Box component="form" onSubmit={onSubmit} aria-labelledby="inquiry-form-title">
      <Box component="h2" id="inquiry-form-title" sx={{ ...text.heading, m: 0, color: colors.green, textAlign: 'center' }}>
        {form.title}
      </Box>
      <Grid container columnSpacing={fluid(12, 24)} rowSpacing={fluid(12, 23)} sx={{ mt: fluid(20, 33) }}>
        {fieldConfig.map((field) => (
          <Grid key={field.name} size={{ xs: 12, sm: 6 }}>
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
              sx={inputSx}
            />
          </Grid>
        ))}
        <Grid size={12}>
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
            sx={{ ...inputSx, display: 'block', height: fluid(140, 165), pt: fluid(16, 20), resize: 'vertical' } as SxProps<Theme>}
          />
        </Grid>
        <Grid size={12}>
          <Box
            component="label"
            sx={{ ...inputSx, display: 'flex', alignItems: 'center', gap: '16px', px: fluid(14, 21), cursor: 'pointer' } as SxProps<Theme>}
          >
            <Box component="input" type="file" name="attachment" onChange={onFileChange} sx={visuallyHidden} />
            <Box
              component="span"
              sx={{
                ...text.input,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: '139px',
                height: '34px',
                border: `1px solid ${colors.grey}`,
                borderRadius: '30px',
              }}
            >
              {form.fileButton}
            </Box>
            <Box component="span" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {fileName}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        component="label"
        sx={{ ...text.small, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '11px', mt: fluid(20, 34), cursor: 'pointer' }}
      >
        <Box
          component="input"
          type="checkbox"
          required
          checked={consent}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setConsent(e.target.checked)}
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
            '&:checked': { background: `radial-gradient(circle, ${colors.green} 0 7px, ${colors.lightGreen} 8px)` },
            '&:focus-visible': { outline: `2px solid ${colors.green}`, outlineOffset: '2px' },
          }}
        />
        <span>
          {form.consent.before}
          <Box component={RouterLink} to={content.paths.terms} sx={inlineLink}>
            {form.consent.termsLink}
          </Box>
          {form.consent.middle}
          <Box component={RouterLink} to={content.paths.privacy} sx={inlineLink}>
            {form.consent.privacyLink}
          </Box>
          {form.consent.after}
        </span>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: fluid(20, 23) }}>
        <PillButton label={form.submit} type="submit" variant="green" />
      </Box>
    </Box>
  )
}
