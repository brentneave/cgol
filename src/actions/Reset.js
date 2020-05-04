import cacheNeighbours from '/utils/cacheNeighbours'
import cellsCreate from '/utils/cellsCreate'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'


const Reset = (
  state, 
  {
    width, 
    height
  }
) => 
  effectAdd({
    effect: updateCanvas,
    state: cacheNeighbours({
      ...state,
      cells: cellsCreate({
        width, 
        height
      })
    })
  })

export default Reset