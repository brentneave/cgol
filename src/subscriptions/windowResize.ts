import {Action} from 'hyperapp'
import {State} from '/types'

const windowResize = (
  dispatch,
  {action}: {
    action: Action<State>;
  }
): () => void => {
  let running = true

  let lastHeight = 0
  let lastWidth = 0

  const onResize = (): void => {
    const width = Number(window.innerWidth)
    const height = Number(window.innerHeight)

    if (width !== lastWidth || height !== lastHeight) {
      dispatch(
        action,
        {
          height,
          width,
        }
      )
      lastHeight = height
      lastWidth = width
    }

    if (running) window.requestAnimationFrame(onResize)
  }

  window.requestAnimationFrame(onResize)

  return (): void => { running = false }
}

export default windowResize
