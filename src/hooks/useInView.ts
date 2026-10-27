import { useEffect, useRef, useState } from 'react'

// Zjistí, zda se prvek alespoň jednou objevil ve viewportu
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, threshold])

  return { ref, inView }
}

export default useInView
