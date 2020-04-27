import cellsRandomise from '../utils/cellsRandomise'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'


const Randomise = (
  state, 
  { chance }
) => 
  effectAdd({
    effect: updateCanvas,
    state: {
      ...state,
      cells: cellsRandomise({ cells: state.cells, chance })
    }
  })

export default Randomise