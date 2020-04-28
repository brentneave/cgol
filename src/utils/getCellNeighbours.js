const constrain =  ({ cells, x, y }) => ({
  x: x < 0 ? cells.length + x : x % cells.length,
  y: y < 0 ? cells[0].length + y : y % cells[0].length,
})

const getCellNeighbours = ({ cells, x, y }) => [
  constrain({ cells, x: x - 1, y: y - 1 }),
  constrain({ cells, x: x,     y: y - 1 }),
  constrain({ cells, x: x + 1, y: y - 1 }),
  constrain({ cells, x: x - 1, y: y }),
  constrain({ cells, x: x + 1, y: y }),
  constrain({ cells, x: x - 1, y: y + 1 }),
  constrain({ cells, x: x,     y: y + 1 }),
  constrain({ cells, x: x + 1, y: y + 1 }),
]

export default getCellNeighbours
