import { Effect, State } from '/types'

const updateCanvas = (
  dispatch: Effect,
  {
    machine,
    render
  }: State
) => {
  const canvas = <HTMLCanvasElement> document.getElementById(render.canvasId)
  if(!canvas) return

  const context = canvas.getContext('2d')


  context.fillStyle = 'rgba(255, 60, 0, 0.2)'
  context.fillRect(
    0,
    0,
    machine.cellSize * machine.cells.length,
    machine.cellSize * machine.cells[0].length
  )

  context.fillStyle = 'rgba(64, 15, 0, 0.8)'

  machine.cells.forEach(
    (column, x ) => {
      column.forEach(
        (cell, y) => {
          if(cell) {
            context.fillRect(
              machine.cellSize * x,
              machine.cellSize * y,
              machine.cellSize,
              machine.cellSize,
            )
          }
        }
      )
    }
  )
}

export default updateCanvas
