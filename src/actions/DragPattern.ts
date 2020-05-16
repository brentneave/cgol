import {Grid, State} from '/types'
import {Action} from 'hyperapp'

const DragPattern: Action<State, Grid> =
  (state, stamp) => ({
    ...state,
    stamps: {
      ...state.stamps,
      selected: stamp,
      isDragging: true,
      isPanelOpen: false,
    },
  })

export default DragPattern
