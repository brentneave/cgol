const mouseMove = (dispatch, { action }) => {
  const move = event => {
    dispatch(action, event)
  }

  document.addEventListener('mousemove', move)

  return () => { document.removeEventListener('mousemove', move) }
}

export default mouseMove
