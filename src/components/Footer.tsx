import { Box } from '@mui/material'
import content from '@/content/content'
import { hoverContactLink, hoverDarken } from '@/theme/interactions'
import { layout } from '@/theme/layout'
import { colors } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'
import { nbsp } from '@/utils/typography'

interface FooterProps {
  showContactBar?: boolean
}

// Patička: zelený kontaktní pruh a pruh Matfix
export default function Footer({ showContactBar = true }: FooterProps) {
  const { contact, footer } = content
  return (
    <Box component="footer">
      {showContactBar && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: '30px', md: '24px' },
            minHeight: { md: fluid(0, 136) },
            px: layout.pageGutter,
            pt: fluid(32, 34),
            pb: '34px',
            bgcolor: colors.green,
            color: colors.white,
          }}
        >
          <Box component="p" sx={{ ...text.footerText, m: 0 }}>
            {footer.lines.map((line) => (
              <Box component="span" key={line} sx={{ display: 'block' }}>
                {nbsp(line)}
              </Box>
            ))}
          </Box>
          <Box component="address" sx={{ ...text.bodyLarge, fontWeight: 700, fontStyle: 'normal', textAlign: { md: 'right' } }}>
            <Box component="a" href={contact.phoneHref} sx={{ display: 'block', ...hoverContactLink }}>
              {contact.phone}
            </Box>
            <Box component="a" href={contact.emailHref} sx={{ display: 'block', ...hoverContactLink }}>
              {contact.email}
            </Box>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '50px',
          px: { xs: '18px', md: layout.pageGutter.md },
          bgcolor: colors.black,
          color: colors.white,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', md: '12px' } }}>
          <Box component="img" src="/icons/footer_copyright_icon.svg" alt="" sx={{ width: '20px', height: '20px' }} />
          <Box component="span" sx={{ fontFamily: '"Albula Pro", "DM Sans", sans-serif', fontSize: '10px', lineHeight: '10px' }}>
            <Box component="span" sx={{ display: { xs: 'inline', md: 'none' } }}>
              {footer.madeByMobile}
            </Box>
            <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>
              {footer.madeBy}
            </Box>
          </Box>
        </Box>
        <Box
          component="a"
          href={footer.madeByUrl}
          target="_blank"
          rel="noopener"
          aria-label={footer.madeByAria}
          sx={{ display: 'flex', alignItems: 'flex-end', gap: '9px', mr: { md: '10px' }, ...hoverDarken }}
        >
          <Box component="img" src="/icons/footer_matfix_logo.svg" alt="" sx={{ width: '57.6px', height: '15px' }} />
          <Box component="img" src="/icons/footer_matfix_link_icon.svg" alt="" sx={{ width: '19.5px', height: '20px' }} />
        </Box>
      </Box>
    </Box>
  )
}
