import cacheNeighbours from '/utils/cacheNeighbours'
import cellsCreate from '/utils/cellsCreate'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'


const Reset = (
  state
) => 
  effectAdd(
    updateCanvas,
    cacheNeighbours({
      ...state,
      cells: cellsCreate({
        width: state.cells.length, 
        height: state.cells[0].length,
      })
    })
  )

export default Reset