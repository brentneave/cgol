import { Action } from 'hyperapp'

import { State, Stamp } from '/types'

const DragPattern: Action<State, Stamp> = (
  state: State,
  pattern: Stamp
): State => ({
  ...state,
  stamps: {
    ...state.stamps,
    selected: pattern,
    isDragging: true,
    isPanelOpen: false,
  },
})

export default DragPattern
