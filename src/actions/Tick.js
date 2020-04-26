import survive from '../utils/survive'
import spawn from '../utils/spawn'
import updateCanvas from '../effects/updateCanvas'


const Tick = (state) => [
  {
    ...state,
    cells: spawn({ cells: survive({ ...state }) })
  },
  [[updateCanvas, state]]
]

export default Tick