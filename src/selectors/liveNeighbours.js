import { unique } from '../utils'

const getLiveNeighbours = ({ x, y, liveCells }) => {
  const neighbours = unique([
    ...liveCells.filter(cell => cell.x === x - 1 && cell.y === y - 1),
    ...liveCells.filter(cell => cell.x === x && cell.y === y - 1),
    ...liveCells.filter(cell => cell.x === x + 1 && cell.y === y - 1),

    ...liveCells.filter(cell => cell.x === x - 1 && cell.y === y),
    ...liveCells.filter(cell => cell.x === x + 1 && cell.y === y),

    ...liveCells.filter(cell => cell.x === x - 1 && cell.y === y + 1),
    ...liveCells.filter(cell => cell.x === x && cell.y === y + 1),
    ...liveCells.filter(cell => cell.x === x + 1 && cell.y === y + 1),
  ])

  console.log('cell', x, y, neighbours)
  return neighbours;
}

export default getLiveNeighbours