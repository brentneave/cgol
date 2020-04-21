// @ts-nocheck
import isBorn from './selectors/isBorn';
import survives from './selectors/survives';
import allDeadNeighbours from './selectors/allDeadNeighbours';
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
      survives({ 
        ...cell, 
        liveCells: state.liveCells
      })
  ).concat(
    allDeadNeighbours({ 
      liveCells: state.liveCells,
      width: state.width,
      height: state.height,
    }).filter(
      deadCell => isBorn({ 
        ...deadCell,
        liveCells: state.liveCells
      })
    )
  )
})