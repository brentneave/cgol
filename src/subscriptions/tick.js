const tick = (dispatch, { action, time }) => {
  var running = true;

  const frame = () => {
    dispatch(action)
    if(running) window.requestAnimationFrame(frame)
  }

  window.requestAnimationFrame(frame)

  return () => { running = false }
}

export default tick;