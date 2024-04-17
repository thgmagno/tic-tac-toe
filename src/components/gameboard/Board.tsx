'use client'

import { Options } from '@/lib/types'
import { Cell } from './Cell'
import { BiChevronLeft, BiRefresh } from 'react-icons/bi'

interface Props {
  winner: Options | null
  cells: (Options | null)[]
  onCellClick: (value: number) => void
  goToHome: () => void
  resetGame: () => void
}

export function Board({
  cells,
  onCellClick,
  winner,
  goToHome,
  resetGame,
}: Props) {
  const color = {
    X: 'text-green-600',
    O: 'text-red-600',
    draw: 'text-white',
  }

  const message = {
    X: 'Jogador 1 ganhou!',
    O: 'Jogador 2 ganhou!',
    draw: 'Empatou!',
  }

  return (
    <div className="rounded-xl border border-white/20 bg-black/60 p-4 shadow-2xl">
      <div className="mb-5 flex justify-between">
        <button
          onClick={goToHome}
          className="relative right-2 flex items-center font-body text-xl text-neutral-500 transition-colors duration-400 hover:underline"
        >
          <BiChevronLeft size={24} className="" />
          Deixar partida
        </button>
        <button
          onClick={resetGame}
          className="relative left-2 flex items-center font-body text-xl text-neutral-500 transition-colors duration-400 hover:underline"
        >
          Reiniciar
          <BiRefresh size={24} className="ml-0.5" />
        </button>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 font-display">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            index={index}
            value={cell}
            onClick={() => onCellClick(index)}
            winner={winner}
          />
        ))}
      </div>
      {winner && (
        <p
          className={`relative top-2 flex min-h-14 items-center justify-center font-body text-2xl md:text-3xl ${color[winner]}`}
        >
          {message[winner]}
        </p>
      )}
    </div>
  )
}
