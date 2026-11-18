import { apiFetch } from '@/api/client'

// Chybové hlášky k polím: klíč = název pole, hodnota = seznam hlášek
export type Violations = Record<string, string[]>

export interface InquiryData {
  fields: Record<string, string>
  photos: File[]
  consent: boolean
  // Honeypot – u člověka vždy prázdný
  website: string
}

export type InquiryResult =
  | { ok: true }
  | { ok: false; violations: Violations }
  | { ok: false; error: 'rateLimit'; detail?: string }
  | { ok: false; error: 'server' }

// Odeslání poptávky na POST /api/inquiries (multipart kvůli fotkám)
export async function sendInquiry({ fields, photos, consent, website }: InquiryData): Promise<InquiryResult> {
  const body = new FormData()
  Object.entries(fields).forEach(([name, value]) => body.append(name, value))
  body.append('consent', consent ? '1' : '0')
  photos.forEach((photo) => body.append('photos[]', photo))
  body.append('website', website)

  try {
    // Content-Type se nenastavuje, prohlížeč ho doplní i s boundary
    const res = await apiFetch('/api/inquiries', { method: 'POST', body })
    if (res.status === 201) return { ok: true }
    if (res.status === 422) {
      const data = await res.json().catch(() => ({}))
      return { ok: false, violations: (data.violations ?? {}) as Violations }
    }
    if (res.status === 429) {
      const data = await res.json().catch(() => ({}))
      return { ok: false, error: 'rateLimit', detail: typeof data.detail === 'string' ? data.detail : undefined }
    }
    if (import.meta.env.DEV) console.error(`Odeslání poptávky selhalo: HTTP ${res.status}`, await res.text().catch(() => ''))
    return { ok: false, error: 'server' }
  } catch (error) {
    // Výpadek sítě nebo zablokování CORS
    if (import.meta.env.DEV) console.error('Odeslání poptávky selhalo (síť/CORS):', error)
    return { ok: false, error: 'server' }
  }
}
