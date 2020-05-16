import {
  rotate180,
  rotate270,
  rotate90,
} from '2d-array-rotation'
import {Grid} from '/types'

type f = (
  cells: Grid
) => Grid

export const cellsRotate90: f = cells => rotate90(cells)

export const cellsRotate180: f = cells => rotate180(cells)

export const cellsRotate270: f = cells => rotate270(cells)
