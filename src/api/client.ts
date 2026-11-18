// Adresa backend API a přístupový token z prostředí (vkládají se při buildu)
export const API_URL = import.meta.env.VITE_API_URL ?? ''
const API_TOKEN = import.meta.env.VITE_API_TOKEN ?? ''

// Požadavek na API s autentizační hlavičkou
export function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers)
  headers.set('X-AUTH-TOKEN', API_TOKEN)
  if (!headers.has('Accept')) headers.set('Accept', 'application/json')
  return fetch(`${API_URL}${path}`, { ...init, headers })
}
