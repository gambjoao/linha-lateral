'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LogoHeader() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Match system dark mode
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(media.matches)

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches)
    media.addEventListener('change', handler)

    return () => media.removeEventListener('change', handler)
  }, [])

  return (
    <div className="flex items-center mb-4 justify-start px-6 py-4">
      <Image
        src={isDark ? '/dark_mode_logo.png' : '/linha_lateral.png'}
        alt="Linha Lateral Logo"
        width={150}
        height={200}
        priority
      />
    </div>
  )
}
