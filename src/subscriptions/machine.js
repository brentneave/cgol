const frameRate = 1000/60

const Cell = function({
  onCellUpdate = undefined,
  dispatch = undefined,
  value = false,
  neighbours = [],
  x = 0,
  y = 0,
} = {}){

  var _value = value
  var _neighbours = neighbours
  var _x = x
  var _y = y

  this.getValue = () => {
    return _value
  }

  this.setValue = value => {
    if(value !== _value) {
      _value = !!value
      console.log('dispatch', _x, _y, _value)
      dispatch(onCellUpdate, { x: _x, y: _y, value: _value })
      setTimeout(
        this.tellNeighbours,
        frameRate
      )
    }
    return this
  }

  this.tellNeighbours = () => {
    _neighbours.forEach(
      neighbour => neighbour.update()
    )
  }

  this.setNeighbours = (neighbours) => {
    _neighbours = neighbours
    this.tellNeighbours()
  }

  this.update = () => {
    var count = 0
    var i = 0
    const n = neighbours.length
    for(i = 0; i < n; i++) {
      if(_neighbours[i].getValue()) count ++
      if(count > 3) break
    }
    if(_value && count !== 2 && count !== 3) this.setValue(false)
    if(!_value && count === 3) this.setValue(true)
  }
}

const Machine = function({
  onCellUpdate = undefined,
  dispatch = () => {},
  width = 0,
  height = 0,
} = {}){
  
  console.log('new Machine')

  //build 2d list of cells 
  const _columns = [...Array(width)].fill({}).map(
      (column, x) => [...Array(height)].fill({}).map(
        (cell, y) => (
          new Cell({ onCellUpdate, dispatch, value: false, x, y })
        )
      )
  )

  const _getCell = ({ x, y }) =>
    _columns[
      x < 0 
        ? _columns.length + x
        : x % _columns.length
    ][
      y < 0 
        ? _columns[0].length + y
        : y % _columns[0].length
    ]

  // connect up neighbours
  _columns.forEach(
    (column, x) => {
      column.forEach(
        (cell, y) => cell.setNeighbours([
          _getCell({ x: x - 1, y: y - 1}),
          _getCell({ x: x,     y: y - 1}),
          _getCell({ x: x + 1, y: y - 1}),
          _getCell({ x: x - 1, y: y}),
          _getCell({ x: x + 1, y: y}),
          _getCell({ x: x - 1, y: y + 1}),
          _getCell({ x: x,     y: y + 1}),
          _getCell({ x: x + 1, y: y + 1}),
        ])
      )
    }
  )

  this.getHeight = () => height

  this.getWidth = () => width

  this.randomise = () => {
    _columns.forEach(
      (column, x) => {
        column.forEach(
          (cell, y) => {
            cell.setValue(Math.random() < 0.5)
          }
        )
      }
    )
  }

  this.setValueAt = ({ x, y, value }) => {
    _getCell({ x, y }).setValue(value)
  }
}

var grid

const machine = (dispatch, { onCellUpdate }) => {

  if(!grid) {
    grid = new Machine({ onCellUpdate, dispatch, width: 100, height: 100 })
    // dispatch(onMachineCreate, { width: 100, height: 100 })
    grid.randomise()
  }

  return () => { grid = undefined }

}


export default machine