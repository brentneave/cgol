// @ts-nocheck
const updateCanvas = (
  dispatch, 
  {
    canvasId,
    cells,
    cellSize,
    height,
    width
  }
) => {
  
  const canvas = document.getElementById(canvasId)
  const context = canvas.getContext('2d')

  context.fillStyle = 'white'
  context.fillRect(
    0, 
    0, 
    cellSize * width, 
    cellSize * height
  )

  context.fillStyle = 'black'
  cells.forEach(
    (column, x ) => {
      column.forEach(
        (cell, y) => { 
          if(cell) {
            context.fillRect(
              cellSize * x, 
              cellSize * y, 
              cellSize,
              cellSize,
            )
          }
        }
      )
    }
  )
}


export default updateCanvas