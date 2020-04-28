// @ts-nocheck
const cellsCreate = ({
  width = 480, 
  height = 270,
} = {}) => 
  [...Array(width)].fill().map(
    () => [...Array(height)].fill().map(
      () => false
    )
  )

export default cellsCreate