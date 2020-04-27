const MouseMoved = (
  state,
  { pageX, pageY }
) => ({
  ...state,
  mouse: {
    x: pageX,
    y: pageY,
  }
})

export default MouseMoved