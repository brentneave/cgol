import cellsCreate from '/utils/cellsCreate'
import updateCanvas from '/effects/updateCanvas'


const Reset = (
  state, 
  {
    width, 
    height
  }
) => [
  {
    ...state,
    cells: cellsCreate({
      width, 
      height
    })
  },
  [[updateCanvas, state]]
]

export default Reset