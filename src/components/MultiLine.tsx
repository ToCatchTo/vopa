import { Fragment } from 'react'
import { Box } from '@mui/material'
import { designWidthQuery } from '@/theme/layout'
import { nbsp } from '@/utils/typography'

interface MultiLineProps {
  text: string
}

// Text se zalomením řádků podle návrhu (\n), aplikovaným jen v šířce blízké návrhu
export default function MultiLine({ text }: MultiLineProps) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              {' '}
              <Box component="br" sx={{ display: 'none', [designWidthQuery]: { display: 'inline' } }} />
            </>
          )}
          {nbsp(line)}
        </Fragment>
      ))}
    </>
  )
}
