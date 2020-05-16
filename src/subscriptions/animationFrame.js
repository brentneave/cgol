const animationFrame = (dispatch, { action }) => {
  let running = true

  const frame = () => {
    dispatch(action)
    if (running) window.requestAnimationFrame(frame)
  }

  window.requestAnimationFrame(frame)

  return () => { running = false }
}

export default animationFrame
