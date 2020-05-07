import { State } from '/types'

type f = (state:State) => State

const Stop:f = state => ({
    ...state,
    machine: {
      ...state.machine,
      isRunning: false
    }
  })

export default Stop