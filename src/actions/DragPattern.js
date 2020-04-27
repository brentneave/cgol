const DragPattern = (
  state,
  {
    pattern = [[0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0]]
  } = {}
) => ({
  ...state,
  draggingPattern: pattern
})

export default DragPattern