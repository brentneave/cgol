import cellsTick from '../utils/cellsTick'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

const Tick = (state) => 
  effectAdd({
    effect: updateCanvas,
    state: {
      ...state,
      cells: cellsTick({ cells: state.cells, neighbours: state.neighbours })
    }
  })



export default Tick