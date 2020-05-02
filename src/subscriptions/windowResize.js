const windowResize = (dispatch, { action, canvasId }) => {

  var running = true

  var lastHeight = 0
  var lastWidth = 0

  const onResize = () => {

    const canvas = document.getElementById(canvasId)

    if(canvas) {
      const width = Number(canvas.offsetWidth)
      const height = Number(canvas.offsetHeight)

      if(width !== lastWidth || height !== lastHeight) {
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
    }

    if(running) window.requestAnimationFrame(onResize)
  }

  window.requestAnimationFrame(onResize)

  return () => { running = false }
}

export default windowResize;