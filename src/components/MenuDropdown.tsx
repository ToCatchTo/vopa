import { useEffect, useId, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import content from '@/content/content'
import { hoverDarken } from '@/theme/interactions'
import { colors } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Rozbalovací menu s nabídkou služeb
export default function MenuDropdown() {
  const { pathname } = useLocation()
  // Menu je otevřené jen na stránce, kde bylo otevřeno
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === pathname
  const setOpen = (value: boolean) => setOpenPath(value ? pathname : null)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  // Zavření klikem mimo menu nebo klávesou Escape
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Box ref={rootRef} component="nav" sx={{ position: 'relative', height: fluid(65, 88) }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          bgcolor: colors.lightGreen,
          borderRadius: fluid(15, 31),
          boxShadow: `0 3px 6px ${colors.shadow}`,
          overflow: 'hidden',
        }}
      >
        <Box
          component="button"
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          aria-label={open ? content.menu.closeAria : content.menu.openAria}
          onClick={() => setOpen(!open)}
          sx={{
            ...text.button,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            width: '100%',
            height: fluid(65, 88),
            pl: fluid(27, 44),
            pr: fluid(26, 44),
            border: 0,
            bgcolor: 'transparent',
            color: colors.green,
            cursor: 'pointer',
            textAlign: 'left',
            ...hoverDarken,
          }}
        >
          <Box component="span" sx={{ fontSize: fluid(18, 24), whiteSpace: 'nowrap', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            {content.menu.label}
          </Box>
          <Box
            component="img"
            src="/icons/menu_toggle_icon.svg"
            alt=""
            sx={{
              width: fluid(30, 50),
              height: fluid(30, 50),
              flexShrink: 0,
              transform: open ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease-out',
            }}
          />
        </Box>
        <Box
          component="ul"
          id={listId}
          hidden={!open}
          sx={{ listStyle: 'none', m: 0, pt: fluid(0, 4), pb: fluid(20, 46), pl: fluid(27, 82), pr: fluid(26, 44) }}
        >
          {content.menu.items.map((item) => (
            <Box component="li" key={item.path}>
              <Box
                component={NavLink}
                to={item.path}
                sx={{
                  ...text.bodyLarge,
                  display: 'inline-block',
                  lineHeight: fluid(40, 47),
                  color: colors.green,
                  textDecoration: 'none',
                  '&:hover, &.active': {
                    fontWeight: 700,
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  },
                }}
              >
                {item.label}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
