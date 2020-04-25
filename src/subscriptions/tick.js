const tick = (dispatch, { action, time }) => {
  const interval = setInterval(
    () => dispatch(action),
    time
  )
  return () => { clearInterval(interval) }
}

export default tick;