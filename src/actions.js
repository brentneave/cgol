// @ts-nocheck
import liveNeighbours from './selectors/liveNeighbours';

// State transitions
export const SetA = (state, a) => ({ ...state, a })
export const SetB = (state, b) => ({ ...state, b })


export const Init = (state, {n, x, y}) => ({
  ...state,
  width: x,
  height: y,
  liveCells: [...Array(n)].map(
    el => ({
      x: Math.round(Math.random() * x),
      y: Math.round(Math.random() * y)
    })
  )
})

export const Tick = (state) => ({
  ...state,
  liveCells: state.liveCells.filter(
    cell => 
      (
        (n) => {
          console.log('number of neighbours', n, (n === 2 || n === 3))
          return (n === 2 || n === 3)
        }
      )(
        liveNeighbours({ 
          ...cell, 
          liveCells: state.liveCells
        }).length
      )
  )
})