import { useEffect, useState } from 'react'
import { apiFetch } from '@/api/client'

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

// Jednotný hook pro načítání dat z API
export function useFetch<T>(path: string | null, init?: RequestInit): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ data: null, loading: !!path, error: null })

  useEffect(() => {
    if (!path) return
    const controller = new AbortController()
    setState((prev) => ({ ...prev, loading: true, error: null }))

    apiFetch(path, { ...init, signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<T>
      })
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((error: Error) => {
        if (error.name !== 'AbortError') setState({ data: null, loading: false, error })
      })

    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  return state
}

export default useFetch
