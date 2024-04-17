import { ReactNode } from 'react'

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {children}
    </div>
  )
}
