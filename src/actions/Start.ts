import { Action } from 'hyperapp'
import { State } from '/types'

const Start: Action<State> = state => ({
    ...state,
    machine: {
      ...state.machine,
      isRunning: true
    }
  })

export default Start
