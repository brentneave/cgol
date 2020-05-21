export type Coord = { x: number; y: number }

export type Cell = boolean | number

export type Grid = Cell[][]

export type Machine = {
  cells: Grid;
  cellSize: number;
  isRunning: boolean;
  neighbours: Neighbours;
}

export type Mouse = {
  position: Coord;
}

export type Neighbours = Coord[][][]

export type Layer = {
  backgroundColor: string;
  foregroundColor: string;
  id: string;
  trails: boolean;
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
