import updateCanvas from '/effects/updateCanvas'
import tickAllCells from '/utils/tickAllCells'


const Tick = (state) => [
  {
    ...state,
    cells: tickAllCells({ cells: state.cells })
  },
  [[updateCanvas, state]]
]

export default Tick