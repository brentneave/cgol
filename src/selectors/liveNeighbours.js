import { unique } from '../utils'

const getLiveNeighbours = ({ x, y, liveCells }) => unique([
    liveCells.find(cell => cell.x === x - 1 && cell.y === y - 1),
    liveCells.find(cell => cell.x === x && cell.y === y - 1),
    liveCells.find(cell => cell.x === x + 1 && cell.y === y - 1),

    liveCells.find(cell => cell.x === x - 1 && cell.y === y),
    liveCells.find(cell => cell.x === x + 1 && cell.y === y),

    liveCells.find(cell => cell.x === x - 1 && cell.y === y + 1),
    liveCells.find(cell => cell.x === x && cell.y === y + 1),
    liveCells.find(cell => cell.x === x + 1 && cell.y === y + 1),
  ]);

export default getLiveNeighbours