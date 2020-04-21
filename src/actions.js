// @ts-nocheck
import liveNeighbours from './selectors/liveNeighbours';
import allDeadNeighbours from './selectors/allDeadNeighbours';

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
        (n) => (n === 2 || n === 3)
      )(
        liveNeighbours({ 
          ...cell, 
          liveCells: state.liveCells
        }).length
      )
  ).concat(
    allDeadNeighbours({ 
      liveCells: state.liveCells,
      width: state.width,
      height: state.height,
    }).filter(
      deadCell => liveNeighbours({ 
        ...deadCell,
        liveCells: state.liveCells
      }).length >= 3
    )
  )
})