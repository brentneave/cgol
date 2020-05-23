import {cellsRotate180, cellsRotate270, cellsRotate90} from '/utils/cellsRotate.ts'
import {State} from '/types'
import TwoEngineCorderShip from '/stamps/TwoEngineCorderShip'
import cellsCreate from '/utils/cellsCreate'
import gosperGliderGun from '/stamps/gosperGliderGun'
import pulsar from '/stamps/pulsar'
import rPentomino from '/stamps/rPentomino'

const gosperGliderGun90 = cellsRotate90(gosperGliderGun)
const gosperGliderGun180 = cellsRotate180(gosperGliderGun)
const gosperGliderGun270 = cellsRotate270(gosperGliderGun)

const init: State = {
  machine: {
    ...cellsCreate({chance: 0.2}),
    isRunning: true,
    scale: 4,
  },
  stamps: {
    available: [
      gosperGliderGun,
      pulsar,
      rPentomino,
      TwoEngineCorderShip,
      gosperGliderGun90,
      gosperGliderGun180,
      gosperGliderGun270,
    ],
    isDragging: true,
    isPanelOpen: false,
  },
  layers: [
    {
      id: 'layer0',
      foregroundColor: {r: 0, g: 0, b: 0, a: 95},
      trailAlpha: 0.93,
    },
    {
      id: 'layer2',
      foregroundColor: {r: 255, g: 255, b: 255, a: 255},
      trailAlpha: 0,
    },
  ],
  mouse: {position: {x: 0, y: 0}},
}

export default init
