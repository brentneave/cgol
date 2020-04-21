import { isEqual, uniqWith } from 'lodash';


export const decodeNumberInput = event => parseInt(event.target.value || 0)


export const getLiveNeighbours = ({ x, y, liveCells }) => unique([
  ...liveCells.filter(cell => cell.x === x - 1 && cell.y === y - 1),
  ...liveCells.filter(cell => cell.x === x && cell.y === y - 1),
  ...liveCells.filter(cell => cell.x === x + 1 && cell.y === y - 1),

  ...liveCells.filter(cell => cell.x === x - 1 && cell.y === y),
  ...liveCells.filter(cell => cell.x === x + 1 && cell.y === y),

  ...liveCells.filter(cell => cell.x === x - 1 && cell.y === y + 1),
  ...liveCells.filter(cell => cell.x === x && cell.y === y + 1),
  ...liveCells.filter(cell => cell.x === x + 1 && cell.y === y + 1),
])


export const unique = a => uniqWith(a, isEqual);


export const equals = (a, b) => isEqual(a, b);