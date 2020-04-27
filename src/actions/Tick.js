import updateCanvas from '/effects/updateCanvas'
import cellsTick from '../utils/cellsTick'


const Tick = (state) => [
  {
    ...state,
    cells: cellsTick({ cells: state.cells })
  },
  [[updateCanvas, state]]
]

export default Tick