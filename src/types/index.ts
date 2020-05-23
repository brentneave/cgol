export type Coord = { x: number; y: number }

export type Cell = boolean | number

export type Grid = Cell[][]

export type Machine = {
  cells: Grid;
  isRunning: boolean;
  neighbours: Neighbours;
  scale: number;
}

export type Mouse = {
  position: Coord;
}

export type Neighbours = Coord[][][]

export type RGBA = { r: number; g: number; b: number; a: number}

export type Layer = {
  id: string;
  foregroundColor: RGBA;
  trailAlpha: number;
}

export type Stamps = {
  available: Grid[];
  selected?: Grid;
  isDragging: boolean;
  isPanelOpen: boolean;
}

export type State = {
  machine: Machine;
  stamps: Stamps;
  layers: Layer[];
  mouse: Mouse;
}
