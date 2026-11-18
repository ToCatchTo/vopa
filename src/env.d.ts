// Typy proměnných prostředí a globálních skriptů
interface ImportMetaEnv {
  readonly VITE_API_URL?: string
  readonly VITE_API_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  // Umami statistiky (načítá se asynchronně, nemusí být k dispozici)
  umami?: { track: (event: string, data?: Record<string, unknown>) => void }
}
