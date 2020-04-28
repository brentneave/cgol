import cellsCreate from '/utils/cellsCreate'

const init = {
  canvasId: 'canvas',
  cells: cellsCreate(),
  cellSize: 3,
  draggingPattern: undefined,
  isRunning: false,
  mouse: { x: 0, y: 0 },
}

export default init