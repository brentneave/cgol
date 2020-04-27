import randomiseCells from '/utils/randomiseCells'

const init = {
  canvasId: 'canvas',
  cellSize: 2,
  isRunning: true,
  ...randomiseCells()
}

export default init