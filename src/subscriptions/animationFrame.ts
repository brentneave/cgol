import { Action } from 'hyperapp'
import { State } from '/types'

const animationFrame = (
  dispatch, 
  { action }: {action: Action<State>}
): () => void => {
  let running = true

  const frame = (): void => {
    dispatch(action)
    if (running) window.requestAnimationFrame(frame)
  }

  window.requestAnimationFrame(frame)

  return (): void => { running = false }
}

export default animationFrame
