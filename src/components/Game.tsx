'use client'

import { useState } from 'react'
import { Modal } from './Modal'
import { Board } from './gameboard/Board'
import { Options } from '@/lib/types'

export function Game() {
  const [mode, setMode] = useState<'home' | 'game'>('home')
  const [board, setBoard] = useState<(Options | null)[]>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X')
  const [winner, setWinner] = useState<Options | null>(null)

  const startGame = () => setMode('game')
  const goToHome = () => {
    resetGame()
    setMode('home')
  }

  const handleCellClick = (index: number) => {
    if (!board[index] && !winner) {
      const newBoard = [...board]
      newBoard[index] = currentPlayer
      setBoard(newBoard)
      checkWinner(newBoard)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  const resetGame = () => {
    if (board.some((item) => item !== null)) {
      const confirmation = confirm('Realmente quer abandonar a partida?')
      if (confirmation) {
        setBoard(Array(9).fill(null))
        setCurrentPlayer('X')
        setWinner(null)
      }
    }
  }

  const checkWinner = (board: (Options | null)[]) => {
    const winningCombos = [
      // linhas
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // colunas
      [0, 3, 6],
      [1, 3, 7],
      [2, 5, 8],

      // diagonais
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const combo of winningCombos) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a])
        return
      }
    }

    if (!board.includes(null)) setWinner('draw')
  }

  return (
    <div>
      {mode === 'home' ? (
        <Modal onStartGame={startGame} />
      ) : (
        <Board
          cells={board}
          onCellClick={handleCellClick}
          winner={winner}
          goToHome={goToHome}
          resetGame={resetGame}
        />
      )}
    </div>
  )
}
