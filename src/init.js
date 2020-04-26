import randomiseCells from '/utils/randomiseCells'

const init = {
  canvasId: 'canvas',
  cells: [],
  cellSize: 2,
  isRunning: false,
  ...randomiseCells({
    chanceOfSpawn: 1/3, 
    width: 320, 
    height: 240,
  })
}

export default init