import { Action } from 'hyperapp'
import { State } from '/types'

const DragPatternCancel:Action<State> = state => ({
  ...state,
  stamps: {
    ...state.stamps,
    isDragging: false,
  },
})

export default DragPatternCancel
