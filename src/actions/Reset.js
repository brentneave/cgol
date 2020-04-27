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
    state: {
      ...state,
      cells: cellsCreate({
        width, 
        height
      })
    }
  })

export default Reset