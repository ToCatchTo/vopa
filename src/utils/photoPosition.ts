// Pozice výřezu fotky (object-position) a její dočasné uložení při ladění v dev režimu

const keywords: Record<string, number> = { left: 0, top: 0, center: 50, right: 100, bottom: 100 }
const storagePrefix = 'vopa-photo-position:'

export interface PhotoPoint {
  x: number
  y: number
}

// Převede CSS hodnotu ('center top', '30% 70%') na procenta
export function parsePosition(value?: string): PhotoPoint {
  const [first = 'center', second = 'center'] = (value ?? 'center').trim().split(/\s+/)
  const toNumber = (part: string) => keywords[part] ?? (Number.parseFloat(part) || 0)
  // Jediné klíčové slovo pro svislou osu ('top') patří na osu Y
  if (second === 'center' && (first === 'top' || first === 'bottom')) return { x: 50, y: toNumber(first) }
  return { x: toNumber(first), y: toNumber(second) }
}

export function formatPosition({ x, y }: PhotoPoint): string {
  return `${Math.round(x)}% ${Math.round(y)}%`
}

// Uložená pozice z ladění (jen v dev režimu), jinak výchozí z content.ts
export function storedPosition(src: string, fallback?: string): string {
  if (!import.meta.env.DEV) return fallback ?? 'center'
  try {
    return localStorage.getItem(storagePrefix + src) ?? fallback ?? 'center'
  } catch {
    return fallback ?? 'center'
  }
}

export function savePosition(src: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(storagePrefix + src)
    else localStorage.setItem(storagePrefix + src, value)
  } catch {
    // Úložiště není dostupné, pozice platí jen do obnovení stránky
  }
}
