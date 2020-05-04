const effectAdd = (
  effect,
  state
) => [
  state,
  [[effect, state]]
]

export default effectAdd