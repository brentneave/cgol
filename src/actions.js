// @ts-nocheck

import survive from "./selectors/survive"
import spawn from "./selectors/spawn"

// State transitions
export const SetA = (state, a) => ({ ...state, a })
export const SetB = (state, b) => ({ ...state, b })


export const Init = (state, {n, x, y}) => ({
  ...state,
  width: x,
  height: y,
  cells: [...Array(x)].fill().map(
    () => [...Array(y)].fill().map(
      () => Math.random() < (n / (x * y))
    )
  ),
})

export const Start = (state) => ({
  ...state,
  isRunning: true,
})


export const Stop = (state) => ({
  ...state,
  isRunning: false,
})

export const Tick = (state) => ({
  ...state,
  cells: spawn({ cells: survive({ ...state }) })
})