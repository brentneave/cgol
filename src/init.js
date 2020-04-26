import randomiseCells from '/utils/randomiseCells'

const init = {
  canvasId: 'canvas',
  cells: [],
  cellSize: 2,
  isRunning: false,
  ...randomiseCells()
}

export default init