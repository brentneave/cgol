import { State } from '/types'

const Stop = (state: State): State => ({
    ...state,
    machine: {
      ...state.machine,
      isRunning: false
    }
  })

export default Stop
