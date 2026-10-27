// SEO texty stránek – titulky, popisky a údaje o firmě pro strukturovaná data.
import content from '@/content/content'

// Kanonická adresa webu – DOČASNÁ, před spuštěním potvrdit (www vs. bez www).
// Stejná hodnota je i v index.html (og:image), public/robots.txt a scripts/generate-sitemap.mjs.
export const SITE_ORIGIN = 'https://www.example.cz'
export const BRAND = 'VoPa Vondráček'
export const TITLE_SEPARATOR = ' – '
// Výchozí obrázek pro sdílení (1200 × 630)
export const DEFAULT_OG_IMAGE = '/images/og_default.jpg'
// Titulek domovské stránky za názvem značky
const HOME_TITLE = 'Údržba zeleně v Pardubicích a okolí'

export interface SeoMeta {
  // Bez značky; prázdné = značka + výchozí titulek domovské stránky
  title?: string
  // Cca 120–160 znaků
  description: string
}

const { paths } = content

// Stránky podle cesty
export const SEO = {
  [paths.home]: {
    description:
      'VoPa Vondráček – údržba zeleně, zahradní práce, kácení stromů a terénní úpravy pro obce, firmy i domácnosti v Pardubicích a Pardubickém kraji.',
  },
  [paths.maintenance]: {
    title: 'Údržba zeleně Pardubice',
    description:
      'Pravidelná údržba zeleně v Pardubicích pro obce, firmy a domácnosti. Sečení, stříhání plotů, kácení i odvoz odpadu – VoPa Vondráček od roku 1994.',
  },
  [paths.gardening]: {
    title: 'Zahradní práce Pardubice',
    description:
      'Zahradní práce v Pardubicích: sečení trávníků, ruční i chemická likvidace plevele a stříhání živých plotů a keřů. Nezávazná poptávka – VoPa Vondráček.',
  },
  [paths.treeFelling]: {
    title: 'Kácení stromů Pardubice',
    description:
      'Kácení a prořez stromů v Pardubicích, rizikové kácení pomocí mechanizace, štěpkování a frézování pařezů. Bezpečně a s úklidem – VoPa Vondráček.',
  },
  [paths.groundwork]: {
    title: 'Terénní práce Pardubice',
    description:
      'Terénní úpravy zahrad a pozemků v Pardubicích: vyrovnání terénu, příprava ploch pro trávníky a záhony, navezení zeminy a substrátu. VoPa Vondráček.',
  },
  [paths.otherServices]: {
    title: 'Další služby',
    description:
      'Odvoz a likvidace zeleného odpadu, údržba dětských hřišť a prodej palivového dřeva s dovozem v Pardubicích a okolí. VoPa Vondráček.',
  },
  [paths.inquiry]: {
    title: 'Poptávka',
    description:
      'Nezávazná poptávka údržby zeleně, zahradních prací, kácení stromů nebo terénních úprav v Pardubickém kraji. Nabídku VoPa Vondráček připravíme zdarma.',
  },
  [paths.inquirySent]: {
    title: 'Poptávka odeslána',
    description: 'Děkujeme za poptávku. VoPa Vondráček se vám ozve co nejdříve.',
  },
  [paths.contact]: {
    title: 'Kontakt',
    description: `Kontakt na VoPa Vondráček, Pardubice: telefon ${content.contact.phone}, e-mail ${content.contact.email}. Fakturační údaje a provozovna Areál UMA Semtín.`,
  },
} satisfies Record<string, SeoMeta>

// Celý titulek stránky: "Značka – Kontakt"
export const formatTitle = (title?: string) => `${BRAND}${TITLE_SEPARATOR}${title ?? HOME_TITLE}`

// Údaje o firmě pro strukturovaná data
const LOCAL_BUSINESS = {
  types: ['LocalBusiness', 'LandscapingBusiness'],
  name: BRAND,
  legalName: content.brand.legalName,
  vatId: 'CZ25946242',
  taxId: '25946242',
  address: {
    streetAddress: 'Palackého třída 2627',
    addressLocality: 'Pardubice',
    postalCode: '530 02',
    addressCountry: 'CZ',
  },
  areaServed: 'Pardubický kraj',
}

export const localBusinessJsonLd = () => ({
  '@type': LOCAL_BUSINESS.types,
  '@id': `${SITE_ORIGIN}/#business`,
  name: LOCAL_BUSINESS.name,
  legalName: LOCAL_BUSINESS.legalName,
  vatID: LOCAL_BUSINESS.vatId,
  taxID: LOCAL_BUSINESS.taxId,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/icons/logo.svg`,
  image: `${SITE_ORIGIN}${DEFAULT_OG_IMAGE}`,
  telephone: content.contact.phone,
  email: content.contact.email,
  address: { '@type': 'PostalAddress', ...LOCAL_BUSINESS.address },
  areaServed: LOCAL_BUSINESS.areaServed,
  sameAs: [content.contact.facebookUrl],
})

// Strukturovaná data stránky služby
export const serviceJsonLd = (name: string, description: string, path: string) => ({
  '@type': 'Service',
  name,
  description,
  url: `${SITE_ORIGIN}${path}`,
  areaServed: LOCAL_BUSINESS.areaServed,
  provider: { '@id': `${SITE_ORIGIN}/#business` },
})
