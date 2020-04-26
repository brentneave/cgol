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
    ...randomiseCells({
      chanceOfSpawn,
      width, 
      height
    })
  },
  [[updateCanvas, state]]
]

export default Randomise