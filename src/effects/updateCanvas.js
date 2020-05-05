// @ts-nocheck
const updateCanvas = (
  dispatch, 
  {
    canvasId,
    cells,
    cellSize
  }
) => {
  
  const canvas = document.getElementById(canvasId)
  const context = canvas.getContext('2d')

  context.fillStyle = 'rgba(0,0,100,0.1)'
  context.fillRect(
    0,
    0,
    cellSize * cells.length, 
    cellSize * cells[0].length
  )

  context.fillStyle = 'red'

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