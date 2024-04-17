'use client'

import { Options } from '@/lib/types'

type Border = {
  [key: number]: string
}

interface Props {
  index: number
  winner: Options | null
  value: Options | null
  onClick: () => void
}

export function Cell({ index, value, onClick, winner }: Props) {
  const handleClick = () => {
    if (!value) onClick()
  }

  const border: Border = {
    0: 'border-b border-r',
    1: 'border-b border-r',
    2: 'border-b',
    3: 'border-b border-r',
    4: 'border-b border-r',
    5: 'border-b',
    6: 'border-r',
    7: 'border-r',
    8: '',
  }

  return (
    <div
      onClick={handleClick}
      className={`flex h-[100px] w-[100px] items-center justify-center rounded-lg border-white/20 text-lg ${!winner ? 'cursor-pointer hover:bg-white/5' : 'cursor-default'} ${border[index]}`}
    >
      <span
        className={`${value === 'X' && 'text-green-600'} ${value === 'O' && 'text-red-600'}`}
      >
        {value}
      </span>
    </div>
  )
}
