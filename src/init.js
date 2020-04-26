import randomiseCells from '/utils/randomiseCells'

const init = {
  canvasId: 'canvas',
  cellSize: 2,
  isRunning: false,
  ...randomiseCells()
}

export default init