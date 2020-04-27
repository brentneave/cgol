import cellsCreate from '/utils/cellsCreate'

const init = {
  canvasId: 'canvas',
  cellSize: 2,
  draggingPattern: undefined,
  isRunning: false,
  cells: cellsCreate()
}

export default init