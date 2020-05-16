const windowResize = (dispatch, { action, canvasId }) => {
  let running = true

  let lastHeight = 0
  let lastWidth = 0

  const onResize = () => {
    const canvas = document.getElementById(canvasId)

    if (canvas) {
      const width = Number(window.innerWidth)
      const height = Number(window.innerHeight)

      if (width !== lastWidth || height !== lastHeight) {
        dispatch(
          action,
          {
            height,
            width
          }
        )
        lastHeight = height
        lastWidth = width
      }
    }

    if (running) window.requestAnimationFrame(onResize)
  }

  window.requestAnimationFrame(onResize)

  return () => { running = false }
}

export default windowResize
