import cellsRandomise from '../utils/cellsRandomise'
import updateCanvas from '/effects/updateCanvas'


const Randomise = (
  state, 
  { chance }
) => [
  {
    ...state,
    cells: cellsRandomise({ cells: state.cells, chance })
  },
  [[updateCanvas, state]]
]

export default Randomise