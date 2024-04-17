'use client'

import { Options } from '@/lib/types'

interface Props {
  winner: Options | null
  value: Options | null
  onClick: () => void
}

export function Cell({ value, onClick, winner }: Props) {
  const handleClick = () => {
    if (!value) onClick()
  }

  return (
    <div
      onClick={handleClick}
      className={`flex h-[100px] w-[100px] items-center justify-center border text-lg ${!winner ? 'cursor-pointer hover:bg-neutral-800' : 'cursor-default'}`}
    >
      <span
        className={`${value === 'X' && 'text-green-600'} ${value === 'O' && 'text-red-600'}`}
      >
        {value}
      </span>
    </div>
  )
}
