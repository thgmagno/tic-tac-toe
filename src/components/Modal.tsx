'use client'

import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { BsFillPeopleFill, BsRobot } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { SelectDifficulty } from './SelectDifficulty'

interface Props {
  onStartGame: () => void
}

export function Modal({ onStartGame }: Props) {
  const [modal, setModal] = useState(false)
  const [mode, setMode] = useState<'PvP' | 'PvAI'>('PvAI')
  const [difficulty, setDifficult] = useState<
    'easy' | 'medium' | 'hard' | null
  >(null)

  const isInvalid = !difficulty && mode === 'PvAI'

  const startGame = () => onStartGame()

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="font-body max-w-40 animate-pulse text-xl md:text-2xl"
      >
        Começar o jogo
      </button>
      {modal && (
        <div className="modal">
          <div className="font-body bg-secondaryDark relative flex flex-col rounded-lg border-2 p-2.5 text-lg dark:text-black">
            <div className="flex justify-between">
              <div className="mr-16 flex space-x-2.5">
                <button
                  onClick={() => setMode('PvAI')}
                  className={`flex items-center rounded-t-lg p-2 ${mode === 'PvAI' && 'bg-neutral-300'}`}
                >
                  <BsRobot size={20} className="mr-1.5" /> Computador
                </button>
                <button
                  onClick={() => setMode('PvP')}
                  className={`flex items-center rounded-t-lg p-2 ${mode === 'PvP' && 'bg-neutral-300'}`}
                >
                  <BsFillPeopleFill size={20} className="mr-1.5" /> Dois
                  jogadores
                </button>
              </div>
              <GrClose
                onClick={() => setModal(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-grow flex-col space-y-2 rounded-b-lg bg-neutral-300 p-2">
              {mode === 'PvP' ? (
                <span className="mx-auto max-w-72 py-14 text-center text-xl">
                  Quem será o mestre do Tic-Tac-Toe? Descubra agora!
                </span>
              ) : (
                <SelectDifficulty
                  difficulty={difficulty}
                  setDifficulty={setDifficult}
                />
              )}

              <Button
                variant="bordered"
                className="font-body text-xl md:text-2xl dark:text-black"
                onClick={startGame}
                isDisabled={isInvalid}
              >
                Iniciar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
