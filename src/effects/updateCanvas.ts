import {Cell, Layer, State} from '/types'

const updateCanvas = (
  dispatch,
  {
    machine,
    layers,
  }: State
): void => {
  const w = machine.cells.length
  const h = machine.cells[0].length
  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D
  let imageData: ImageData
  let pixelIndex: number

  layers.forEach(
    (layer: Layer): void => {
      canvas = document.getElementById(layer.id) as HTMLCanvasElement
      if (!canvas) return
      context = canvas.getContext('2d')
      imageData = context.getImageData(0, 0, w, h)
      machine.cells.forEach(
        (column: Cell[], x: number): void => {
          column.forEach(
            (cell: Cell, y: number): void => {
              pixelIndex = y * (w * 4) + x * 4
              if (cell) {
                // set pixel to layer foreground color
                imageData.data[pixelIndex] = layer.foregroundColor.r
                imageData.data[pixelIndex + 1] = layer.foregroundColor.g
                imageData.data[pixelIndex + 2] = layer.foregroundColor.b
                imageData.data[pixelIndex + 3] = layer.foregroundColor.a
              } else {
                // multiply pixel alpha by layer trail alpha value
                imageData.data[pixelIndex + 3] *= layer.trailAlpha
              }
            }
          )
        }
      )
      context.putImageData(imageData, 0, 0)
    }
  )
}

export default updateCanvas
