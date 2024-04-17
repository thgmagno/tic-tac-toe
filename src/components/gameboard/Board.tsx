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
    draw: '',
  }

  const message = {
    X: 'Jogador 1 ganhou!',
    O: 'Jogador 2 ganhou!',
    draw: 'Empate!',
  }

  return (
    <>
      <div className="mb-5 flex justify-between">
        <button
          onClick={goToHome}
          className="font-body duration-400 relative right-2 flex items-center text-xl text-neutral-500 transition-colors hover:text-red-600 hover:underline"
        >
          <BiChevronLeft size={20} className="" />
          Deixar partida
        </button>
        <button
          onClick={resetGame}
          className="font-body duration-400 relative left-2 flex items-center text-xl text-neutral-500 transition-colors hover:text-white hover:underline"
        >
          Reiniciar
          <BiRefresh size={20} className="ml-0.5" />
        </button>
      </div>
      <div className="font-display grid grid-cols-3 grid-rows-3 gap-1.5">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            onClick={() => onCellClick(index)}
            winner={winner}
          />
        ))}
      </div>
      {winner && (
        <p
          className={`font-body relative top-5 text-center text-2xl md:text-3xl ${color[winner]}`}
        >
          {message[winner]}
        </p>
      )}
    </>
  )
}
