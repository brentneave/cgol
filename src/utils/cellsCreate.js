// @ts-nocheck
const cellsCreate = ({
  width = 320, 
  height = 240,
} = {}) => 
  [...Array(width)].fill().map(
    () => [...Array(height)].fill().map(
      () => false
    )
  )

export default cellsCreate