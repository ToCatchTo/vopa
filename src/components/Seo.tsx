import { useEffect } from 'react'
import { DEFAULT_OG_IMAGE, SITE_ORIGIN, formatTitle } from '@/seo'

interface SeoProps {
  path: string
  title?: string
  description: string
  ogImage?: string
  noindex?: boolean
}

// Metadata stránky v <head> (React 19 je přesune do hlavičky sám)
export default function Seo({ path, title, description, ogImage = DEFAULT_OG_IMAGE, noindex = false }: SeoProps) {
  const fullTitle = formatTitle(title)
  const url = SITE_ORIGIN + path
  const image = SITE_ORIGIN + ogImage

  // Odstranění statických značek z index.html, aby nebyly dvakrát
  useEffect(() => {
    document.head.querySelectorAll('[data-seo-static]').forEach((el) => el.remove())
  }, [])

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </>
  )
}
