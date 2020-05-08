export type Action = [
  State,
  [[Effect, State]]
]

export type Effect = (...args:any[]) => any

export type Coord = { x: number, y: number }

export type Cell = { alive: boolean, neighbours: number, nextNeighbours: number }

export type Grid = Cell[][]

export type Stamp = number[][]

export type Machine = {
  cells: Grid,
  cellSize: number,
  isRunning: boolean,
}

export type Mouse = {
  position: Coord
}

export type Render =  {
  canvasId: string,
  foregroundColor: number | string,
  backgroundColor: number | string,
}

export type Stamps =  {
  available: Stamp[],
  selected?: Stamp,
  isDragging: boolean,
  isPanelOpen: boolean,
}

export type State = {
  machine:Machine,
  stamps:Stamps,
  render:Render,
  mouse:Mouse,
}
