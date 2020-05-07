import { State } from '/types'

type f = (state:State) => State

const Start:f = state => ({
    ...state,
    machine: {
      ...state.machine,
      isRunning: true
    }
  })

export default Start
