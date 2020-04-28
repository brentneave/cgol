const MouseMoved = (
  state,
  { clientX, clientY }
) => ({
  ...state,
  mouse: {
    x: clientX,
    y: clientY,
  }
})

export default MouseMoved