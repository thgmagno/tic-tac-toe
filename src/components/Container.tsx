import { ReactNode } from 'react'

export function Container({
  children,
  asModal,
}: {
  children: ReactNode
  asModal?: boolean
}) {
  return <main className={`container ${asModal && 'modal'}`}>{children}</main>
}
