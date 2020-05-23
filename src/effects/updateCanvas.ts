import {Cell, Layer, RGBA, State} from '/types'

const getColorIndicesForCoord = (
  x: number,
  y: number,
  w: number
): [number, number, number, number] => {
  const r = y * (w * 4) + x * 4
  return [r, r + 1, r + 2, r + 3]
}

const setColor = (
  imageData: ImageData,
  x: number,
  y: number,
  w: number,
  rgba: RGBA
): void => {
  const indices = getColorIndicesForCoord(x, y, w)
  imageData.data[indices[0]] = rgba.r
  imageData.data[indices[1]] = rgba.g
  imageData.data[indices[2]] = rgba.b
  imageData.data[indices[3]] = rgba.a
}

const multiplyAlpha = (
  imageData: ImageData,
  x: number,
  y: number,
  w: number,
  a: number
): void => {
  const indices = getColorIndicesForCoord(x, y, w)
  imageData.data[indices[3]] *= a
}

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
              if (cell) {
                setColor(
                  imageData,
                  x,
                  y,
                  w,
                  layer.foregroundColor
                )
              } else {
                multiplyAlpha(
                  imageData,
                  x,
                  y,
                  w,
                  layer.trailAlpha
                )
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
