import { Fragment } from 'react'
import { Box } from '@mui/material'

interface MultiLineProps {
  text: string
}

// Text se zalomením řádků podle návrhu (\n), aplikovaným jen na desktopu
export default function MultiLine({ text }: MultiLineProps) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              {' '}
              <Box component="br" sx={{ display: { xs: 'none', md: 'inline' } }} />
            </>
          )}
          {line}
        </Fragment>
      ))}
    </>
  )
}
