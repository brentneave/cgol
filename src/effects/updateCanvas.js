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
  if(!canvas) return

  const context = canvas.getContext('2d')

  
  context.fillStyle = 'rgba(255, 60, 0, 0.2)'
  context.fillRect(
    0,
    0,
    cellSize * cells.length, 
    cellSize * cells[0].length
  )

  context.fillStyle = 'rgba(64, 15, 0, 0.8)'

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