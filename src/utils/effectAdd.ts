import { Effect, State } from '/types'

type f = (
  effect: Effect,
  state: State,
) => [
  State,
  [[Effect, State]]
]

const effectAdd:f = (
  effect,
  state
) => [
  state,
  [[effect, state]]
]

export default effectAdd