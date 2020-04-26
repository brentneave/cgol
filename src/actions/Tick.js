import pipe from '/utils/pipe'
import survive from '/utils/survive'
import spawn from '/utils/spawn'
import updateCanvas from '/effects/updateCanvas'


const Tick = (state) => [
  {
    ...state,
    ...pipe(spawn, survive)({ cells: state.cells })
  },
  [[updateCanvas, state]]
]

export default Tick