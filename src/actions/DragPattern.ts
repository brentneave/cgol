import { Action } from 'hyperapp'

import { Grid, State } from '/types'

const DragPattern: Action<State, Grid> = 
  ( state, stamp ) => ({
    ...state,
    stamps: {
      ...state.stamps,
      selected: stamp,
      isDragging: true,
      isPanelOpen: false,
    },
  })

export default DragPattern
