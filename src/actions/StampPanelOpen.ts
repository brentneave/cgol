import { Action } from 'hyperapp'
import { State } from '/types'

const StampPanelOpen:Action<
  State,
  { isOpen: boolean }
> = (
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
