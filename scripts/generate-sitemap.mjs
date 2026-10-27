// Generování public/sitemap.xml ze seznamu veřejných cest
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// Musí odpovídat SITE_ORIGIN v src/seo.ts (DOČASNÁ hodnota)
const ORIGIN = 'https://www.example.cz'

// Veřejné routy z App.tsx
export const STATIC_PATHS = [
  '/',
  '/udrzba-zelene',
  '/zahradni-prace',
  '/kaceni-stromu',
  '/terenni-prace',
  '/dalsi-sluzby',
  '/poptavka',
  '/kontakt',
]

export function buildSitemap({ origin, paths, today }) {
  const urls = paths
    .map((path) => `  <url>\n    <loc>${origin}${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

if (resolve(fileURLToPath(import.meta.url)) === resolve(process.argv[1])) {
  const today = new Date().toISOString().slice(0, 10)
  const xml = buildSitemap({ origin: ORIGIN, paths: STATIC_PATHS, today })
  const out = resolve(fileURLToPath(new URL('../public/sitemap.xml', import.meta.url)))
  writeFileSync(out, xml)
  console.log(`sitemap.xml: ${STATIC_PATHS.length} URL`)
}
