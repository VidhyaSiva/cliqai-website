'use client'

import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    setHydrated(true)

    // Already visible on mount — trigger immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  // Before hydration (SSR + first paint): treat everything as visible
  // so the page never flashes blank. After hydration, use real inView state.
  return { ref, inView: !hydrated || inView }
}
