import { State } from '/types'

type f = (
  state:State
) => State

const DragPatternCancel:f = state => ({
  ...state,
  stamps: {
    ...state.stamps,
    isDragging: false,
  },
})

export default DragPatternCancel