import { Grid, Neighbours } from '/types'

import getNumberOfLiveNeighbours from './getNumberOfLiveNeighbours'

const shouldSurvive = (n:number):boolean => 
  n === 2 || 
  n === 3

type fn = (
  cells:Grid,
  neighbours:Neighbours,
  x:number,
  y:number
) => boolean

const cellShouldSurvive:fn = (cells, neighbours, x, y) => 
  cells[x][y]
    ? shouldSurvive(
        getNumberOfLiveNeighbours(cells, neighbours, x, y)
      )
    : false
  
export default cellShouldSurvive