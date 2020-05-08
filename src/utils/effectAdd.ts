import { Action, Effect, State } from '/types'

const effectAdd = (
  effect: Effect,
  state: State
): Action => [
  state,
  [[effect, state]]
]

export default effectAdd
