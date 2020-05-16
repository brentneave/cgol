import { Component } from 'hyperapp'
import { Machine, Render, Stamps } from '/types'

import DropPattern from '/actions/DropPattern'

import styles from './styles.css'


const RasterCells:Component<{
  machine:Machine
  render:Render
  stamps:Stamps
}> = ({
  machine,
  render,
  stamps,
}) =>
  <canvas
    class={styles.rasterCells}
    id={render.canvasId}
    width={machine.cells.length * machine.cellSize}
    height={machine.cells[0].length * machine.cellSize}
    onmousedown={
      stamps.isDragging
      ? [
          DropPattern,
          event => ({
            pattern: stamps.selected,
            xOffset: Math.round(event.offsetX / machine.cellSize),
            yOffset: Math.round(event.offsetY / machine.cellSize),
          })
        ]
      : null
    }
  />


export default RasterCells
