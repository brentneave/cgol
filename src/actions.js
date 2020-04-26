// @ts-nocheck
import randomiseCells from './selectors/randomiseCells'
import survive from './selectors/survive'
import spawn from './selectors/spawn'
import updateCanvas from './effects/updateCanvas'


export const Randomise = (
  state, 
  {
    chanceOfSpawn, 
    width, 
    height
  }
) => [
  {
    debug: console.log('Randomise'),
    ...state,
    ...randomiseCells({
      chanceOfSpawn,
      width, 
      height
    })
  },
  [[updateCanvas, state]]
]

export const Start = (state) => [
  {
    debug: console.log('Start'),
    ...state,
    isRunning: true,
  },
  [[updateCanvas, state]]
]


export const Stop = (state) => [
  {
    debug: console.log('Stop'),
    ...state,
    isRunning: false,
  },
  [[updateCanvas, state]]
]


export const Tick = (state) => [
  {
    debug: console.log('Tick'),
    ...state,
    cells: spawn({ cells: survive({ ...state }) })
  },
  [[updateCanvas, state]]
]