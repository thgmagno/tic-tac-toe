'use client'

import { Button } from '@nextui-org/react'

type Difficulty = 'easy' | 'medium' | 'hard' | null

interface Props {
  difficulty: Difficulty
  setDifficulty: (difficulty: Difficulty) => void
}

export function SelectDifficulty({ difficulty, setDifficulty }: Props) {
  const easy = difficulty === 'easy'
  const medium = difficulty === 'medium'
  const hard = difficulty === 'hard'

  return (
    <>
      <span className="mx-auto max-w-72 py-1 text-center text-xl">
        Escolha a dificuldade do jogo
      </span>
      <Button
        onClick={() => setDifficulty('easy')}
        className={`${easy && 'bg-primary dark:bg-primaryDark dark:text-black'}`}
      >
        Fácil
      </Button>
      <Button
        onClick={() => setDifficulty('medium')}
        className={`${medium && 'bg-primary dark:bg-primaryDark dark:text-black'}`}
      >
        Médio
      </Button>
      <Button
        onClick={() => setDifficulty('hard')}
        className={`${hard && 'bg-primary dark:bg-primaryDark dark:text-black'}`}
      >
        Difícil
      </Button>
    </>
  )
}
