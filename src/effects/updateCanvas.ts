import {Layer, RGBA, State} from '/types'

let images: ImageData[] = []
let lastW = 0
let lastH = 0

const updateImages = (
  w: number,
  h: number,
  layers: Layer[]
): void => {
  if (
    w !== lastW
    || h !== lastH
    || layers.length !== images.length
  ) {
    lastW = w
    lastH = h
    images = layers.map(
      (): ImageData => new ImageData(w, h)
    )
  }
}

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
    canvas,
    machine,
    layers,
  }: State
): void => {
  const w = machine.cells.length
  const h = machine.cells[0].length
  const canvasElement = document.getElementById(canvas.id) as HTMLCanvasElement
  if (!canvasElement) return

  updateImages(w, h, layers)

  const context = canvasElement.getContext('2d')

  layers.forEach(
    (layer, i) => {
      machine.cells.forEach(
        (column, x) => {
          column.forEach(
            (cell, y) => {
              if (cell) {
                setColor(
                  images[i],
                  x,
                  y,
                  w,
                  layer.foregroundColor
                )
              } else {
                multiplyAlpha(
                  images[i],
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
      context.putImageData(images[i], 0, 0)
    }
  )
}

export default updateCanvas
