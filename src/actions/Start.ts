import { State } from '/types'

const Start = (state: State): State => ({
    ...state,
    machine: {
      ...state.machine,
      isRunning: true
    }
  })

export default Start
