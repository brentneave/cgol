import updateCanvas from '/effects/updateCanvas'

const OnMachineUpdate = (state, { value, x, y }) => [
  state,
  [[updateCanvas, { canvasId: state.canvasId, cellSize: state.cellSize, value, x, y }]]
]



export default OnMachineUpdate