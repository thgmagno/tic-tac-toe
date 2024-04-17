'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiLoader, FiMoon, FiSun } from 'react-icons/fi'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <div className="mb-5 flex justify-end">
        <FiLoader size={20} />
      </div>
    )

  return (
    <div className="mb-5 flex justify-end">
      {resolvedTheme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <FiMoon size={20} />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <FiSun size={20} />
        </button>
      )}
    </div>
  )
}
