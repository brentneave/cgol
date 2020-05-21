import {State} from '/types'

type f = (
  dispatch,
  state: State
) => void

const updateCanvas: f = (
  dispatch,
  {
    machine,
    layers,
  }
) => {
  layers.forEach(
    layer => {
      const canvas = document.getElementById(layer.id) as HTMLCanvasElement
      if (!canvas) return
      const context = canvas.getContext('2d')
      context.fillStyle = layer.backgroundColor
      if (!layer.trails) {
        context.clearRect(
          0,
          0,
          machine.cellSize * machine.cells.length,
          machine.cellSize * machine.cells[0].length
        )
      }
      context.fillRect(
        0,
        0,
        machine.cellSize * machine.cells.length,
        machine.cellSize * machine.cells[0].length
      )
      context.fillStyle = layer.foregroundColor
      machine.cells.forEach(
        (column, x) => {
          column.forEach(
            (cell, y) => {
              if (cell) {
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
  )
}


export default updateCanvas
