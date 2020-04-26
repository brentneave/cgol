import randomiseCells from '/utils/randomiseCells'
import updateCanvas from '/effects/updateCanvas'


const Randomise = (
  state, 
  {
    chanceOfSpawn, 
    width, 
    height
  }
) => [
  {
    ...state,
    ...randomiseCells()
  },
  [[updateCanvas, state]]
]

export default Randomise