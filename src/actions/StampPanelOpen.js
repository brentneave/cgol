const StampPanelOpen = (
  state, 
  { isOpen = false } = {}
) => ({
  ...state,
  isStampPanelOpen: isOpen,
})

export default StampPanelOpen