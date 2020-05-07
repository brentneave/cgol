import { State } from '/types'

type f = (
  state:State,
  { isOpen }:{ isOpen:boolean }
) => State

const StampPanelOpen:f = (
  state,
  { isOpen = false }
) => ({
  ...state,
  stamps: {
    ...state.stamps,
    isPanelOpen: isOpen,
  }
})

export default StampPanelOpen
