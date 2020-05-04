// @ts-nocheck
const updateCanvas = (
  dispatch, 
  { canvasId, cellSize, value, x, y }
) => {
  
  const canvas = document.getElementById(canvasId)

  console.log(canvasId, canvas, cellSize, value, x, y)


  if(!canvas) return

  const context = canvas.getContext('2d')

  context.fillStyle = value ? 'black' : 'white'

  context.fillRect(
    cellSize * x, 
    cellSize * y, 
    cellSize,
    cellSize,
  )

  // context.fillStyle = 'white'
  // context.fillRect(
  //   0,
  //   0,
  //   cellSize * cells.length, 
  //   cellSize * cells[0].length
  // )

  // context.fillStyle = 'black'

  // cells.forEach(
  //   (column, x ) => {
  //     column.forEach(
  //       (cell, y) => { 
  //         if(cell) {
  //           context.fillRect(
  //             cellSize * x, 
  //             cellSize * y, 
  //             cellSize,
  //             cellSize,
  //           )
  //         }
  //       }
  //     )
  //   }
  // )
}


export default updateCanvas