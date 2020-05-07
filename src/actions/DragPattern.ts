import { State } from '/types'

type f = (
  state:State,
  { pattern:Grid }
) => State

const DragPattern:f = (
  state,
  { pattern }
) => {
  console.log('DragPattern', pattern)
  return ({
  ...state,
  stamps: {
    ...state.stamps,
    selected: pattern,
    isDragging: true,
    isPanelOpen: false,
  },
})
}
export default DragPattern