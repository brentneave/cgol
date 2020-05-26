import {cellsRotate180, cellsRotate270, cellsRotate90} from '/utils/cellsRotate.ts'
import {State} from '/types'
import TwoEngineCorderShip from '/stamps/TwoEngineCorderShip'
import cellsCreate from '/utils/cellsCreate'
import gosperGliderGun from '/stamps/gosperGliderGun'
import pulsar from '/stamps/pulsar'
import rPentomino from '/stamps/rPentomino'
import sidewinder from '/stamps/sidewinder'

const gosperGliderGun90 = cellsRotate90(gosperGliderGun)
const gosperGliderGun180 = cellsRotate180(gosperGliderGun)
const gosperGliderGun270 = cellsRotate270(gosperGliderGun)

const init: State = {
  machine: {
    ...cellsCreate({chance: 0.1}),
    isRunning: true,
    scale: 5,
  },
  stamps: {
    available: [
      gosperGliderGun,
      gosperGliderGun90,
      gosperGliderGun180,
      gosperGliderGun270,
      pulsar,
      rPentomino,
      sidewinder,
      TwoEngineCorderShip,
    ],
    isDragging: true,
    isPanelOpen: false,
  },
  layers: [
    // {
    //   id: 'layer0',
    //   foregroundColor: {r: 110, g: 75, b: 0, a: 255},
    //   trailAlpha: 1,
    // },
    // {
    //   id: 'layer1',
    //   foregroundColor: {r: 92, g: 200, b: 58, a: 255},
    //   trailAlpha: 4,
    // },
    // {
    //   id: 'layer3',
    //   foregroundColor: {r: 255, g: 255, b: 255, a: 255},
    //   trailAlpha: 255,
    // },


    // {
    //   id: 'layer0',
    //   foregroundColor: {r: 230, g: 120, b: 66, a: 255},
    //   trailAlpha: 1,
    // },
    // {
    //   id: 'layer1',
    //   foregroundColor: {r: 141, g: 215, b: 229, a: 255},
    //   trailAlpha: 4,
    // },
    // {
    //   id: 'layer2',
    //   foregroundColor: {r: 253, g: 244, b: 167, a: 255},
    //   trailAlpha: 30,
    // },
    // {
    //   id: 'layer3',
    //   foregroundColor: {r: 255, g: 255, b: 255, a: 255},
    //   trailAlpha: 255,
    // },


    {
      id: 'layer0',
      foregroundColor: {r: 0, g: 31, b: 255, a: 255},
      trailAlpha: 1,
    },
    {
      id: 'layer1',
      foregroundColor: {r: 0, g: 191, b: 255, a: 255},
      trailAlpha: 4,
    },
    {
      id: 'layer2',
      foregroundColor: {r: 255, g: 255, b: 255, a: 255},
      trailAlpha: 255,
    },
  ],
  mouse: {position: {x: 0, y: 0}},
}

export default init
