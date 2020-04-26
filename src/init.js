import randomiseCells from '/utils/randomiseCells'

const init = {
  canvasId: 'canvas',
  cellSize: 4,
  isRunning: false,
  ...randomiseCells()
}

export default init