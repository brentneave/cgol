import {Action} from 'hyperapp'
import {State} from '/types'

const mouseMove = (
  dispatch,
  {action}: { action: Action<State, MouseEvent>}
): () => void => {
  const move = (event: MouseEvent): void => {
    dispatch(action, event)
  }

  document.addEventListener('mousemove', move)

  return (): void => {
    document.removeEventListener('mousemove', move)
  }
}

export default mouseMove
