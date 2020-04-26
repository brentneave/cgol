import randomiseCells from './selectors/randomiseCells'

const init = {
  canvasId: 'canvas',
  cells: [],
  cellSize: 2,
  isRunning: false,
  ...randomiseCells({
    chanceOfSpawn: 0.3333, 
    width: 320, 
    height: 240,
  })
}

export default init