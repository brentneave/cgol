import { Grid, Neighbours } from '/types'

type f = (
  cells:Grid,
  neighbours:Neighbours,
  x:number,
  y:number,
) => number

const getNumberOfLiveNeighbours:f = (cells, neighbours, x, y) => {
  var n = 0
  for(var i = 0; i < neighbours[x][y].length; i++) {
    if(cells[
      neighbours[x][y][i].x
    ][
      neighbours[x][y][i].y
    ]) n++
  }
  return n
}

export default getNumberOfLiveNeighbours