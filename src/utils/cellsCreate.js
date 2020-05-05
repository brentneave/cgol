const cellsCreate = ({
  chance = 0.2,
  width = 480, 
  height = 270,
} = {}) => 
  [...Array(width)].fill([]).map(
    () => [...Array(height)].fill(false).map(
      () => Math.random() < chance
    )
  )

export default cellsCreate