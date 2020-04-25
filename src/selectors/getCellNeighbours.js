// @ts-nocheck

const getCellNeighbours = ({ cells, x, y }) => [
  { x: x - 1, y: y - 1 },
  { x: x,     y: y - 1 },
  { x: x + 1, y: y - 1 },
  { x: x - 1, y: y },
  { x: x + 1, y: y },
  { x: x - 1, y: y + 1 },
  { x: x,     y: y + 1 },
  { x: x + 1, y: y + 1 },
].map(
  ({ x, y }) => ({
    x: x < 0 ? cells.length + x : x % cells.length,
    y: y < 0 ? cells.length + y : y % cells[0].length,
  })
    
)

export default getCellNeighbours
