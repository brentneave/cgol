import {Action} from 'hyperapp'
import {State} from '/types'

const Stop: Action<State> = state => ({
  ...state,
  machine: {
    ...state.machine,
    isRunning: false,
  },
})

export default Stop
