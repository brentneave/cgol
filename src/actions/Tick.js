import cellsTick from '../utils/cellsTick'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

const Tick = (state) => 
  effectAdd(
    updateCanvas,
    {
      ...state,
      cells: cellsTick(state.cells, state.neighbours)
    }
  )



export default Tick