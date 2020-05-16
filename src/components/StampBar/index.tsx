import { Component } from 'hyperapp'
import { Grid } from '/types'

import StampButton from '/components/StampButton'

import gosperGliderGun from '/stamps/gosperGliderGun'
import pulsar from '/stamps/pulsar'
import rPentomino from '/stamps/rPentomino'
import TwoEngineCorderShip from '/stamps/TwoEngineCorderShip'

import { 
  cellsRotate90,
  cellsRotate180,
  cellsRotate270
} from '/utils/cellsRotate'

import style from './style.css'


const gosperGliderGun90 = cellsRotate90(gosperGliderGun)
const gosperGliderGun180 = cellsRotate180(gosperGliderGun)
const gosperGliderGun270 = cellsRotate270(gosperGliderGun)

const StampBar: Component<{
  draggingPattern: Grid;
}> = ({
  draggingPattern
}) =>
  <div class={style.stampBar}>
    {
      [
        gosperGliderGun,
        gosperGliderGun90,
        gosperGliderGun180,
        gosperGliderGun270,
        pulsar,
        rPentomino,
        TwoEngineCorderShip
      ].map(
        stamp => 
          <div class={style.stampBarButton}>
            <StampButton
              isSelected={draggingPattern === stamp}
              stamp={stamp}
            />
          </div>
      )
    }
  </div>

export default StampBar