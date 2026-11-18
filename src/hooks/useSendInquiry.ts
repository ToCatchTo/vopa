import { useCallback, useState } from 'react'
import { sendInquiry, type InquiryData } from '@/api/inquiries'

// Hook pro odeslání poptávky se stavem odesílání
export function useSendInquiry() {
  const [sending, setSending] = useState(false)

  const send = useCallback(async (data: InquiryData) => {
    setSending(true)
    try {
      return await sendInquiry(data)
    } finally {
      setSending(false)
    }
  }, [])

  return { send, sending }
}

export default useSendInquiry
