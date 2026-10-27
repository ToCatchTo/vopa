import { Box, Grid } from '@mui/material'
import content from '@/content/content'
import { fadeUp, hoverContactLink, hoverDarken } from '@/theme/interactions'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Kontaktní osoba, fakturační údaje a provozovna
export default function ContactDetails() {
  const { contact, contactPage } = content
  const linkSx = { display: 'block', ...hoverContactLink }
  return (
    <Box component="address" sx={{ fontStyle: 'normal' }}>
      <Box component="p" sx={{ ...text.personName, m: 0, ...fadeUp(0.1) }}>
        {contact.person}
      </Box>
      <Box component="p" sx={{ ...text.bodyLarge, m: 0, mt: fluid(2, 5), ...fadeUp(0.2) }}>
        {contact.role}
      </Box>
      <Box sx={{ ...text.bodyLarge, fontWeight: 700, mt: fluid(8, 12), ...fadeUp(0.3) }}>
        <Box component="a" href={contact.phoneHref} sx={linkSx}>
          {contact.phone}
        </Box>
        <Box component="a" href={contact.emailHref} sx={linkSx}>
          {contact.email}
        </Box>
      </Box>
      <Grid container columnSpacing={fluid(16, 18)} rowSpacing={fluid(24, 0)} sx={{ mt: fluid(40, 105) }}>
        {[contactPage.billing, contactPage.premises].map((block, i) => (
          <Grid key={block.title} size={{ xs: 12, sm: i === 0 ? 7 : 5 }} sx={fadeUp(0.45 + i * 0.12)}>
            <Box component="h2" sx={{ ...text.heading, m: 0 }}>
              {block.title}
            </Box>
            <Box component="p" sx={{ ...text.body, m: 0, mt: fluid(6, 8) }}>
              {block.lines.map((line) => (
                <Box component="span" key={line} sx={{ display: 'block' }}>
                  {line}
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        component="a"
        href={contact.facebookUrl}
        target="_blank"
        rel="noopener"
        aria-label={contactPage.facebookAria}
        sx={{ display: 'inline-block', mt: fluid(32, 46), ...hoverDarken, ...fadeUp(0.7) }}
      >
        <Box component="img" src="/icons/contact_facebook_icon.svg" alt="" sx={{ display: 'block', width: fluid(40, 50), height: 'auto' }} />
      </Box>
    </Box>
  )
}
