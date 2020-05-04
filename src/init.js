import cacheNeighbours from '/utils/cacheNeighbours'
import cellsCreate from '/utils/cellsCreate'

const init = cacheNeighbours({
  canvasId: 'canvas',
  cells: cellsCreate(),
  cellSize: 3,
  draggingPattern: undefined,
  isRunning: false,
  mouse: { x: 0, y: 0 },
})

export default init