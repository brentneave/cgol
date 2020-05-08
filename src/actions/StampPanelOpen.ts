import { State } from '/types'

const StampPanelOpen = (
  state: State,
  { isOpen = false }
): State => ({
  ...state,
  stamps: {
    ...state.stamps,
    isPanelOpen: isOpen,
  }
})

export default StampPanelOpen
