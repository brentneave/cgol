export type Coord = { x: number; y: number }

export type Cell = boolean | number

export type Grid = Cell[][]

export type Machine = {
  cells: Grid;
  isRunning: boolean;
  neighbours: Neighbours;
}

export type Mouse = {
  position: Coord;
}

export type Neighbours = Coord[][][]

export type RGBA = { r: number; g: number; b: number; a: number}

export type Layer = {
  foregroundColor: RGBA;
  trailAlpha: number;
}

export type Canvas = {
  id: string;
  scale: number;
}

export type Stamps = {
  available: Grid[];
  selected?: Grid;
  isDragging: boolean;
  isPanelOpen: boolean;
}

export type State = {
  canvas: Canvas;
  machine: Machine;
  stamps: Stamps;
  layers: Layer[];
  mouse: Mouse;
}
