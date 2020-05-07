// @ts-ignore
import style from './style.css'

import StampButton from '/components/StampButton'

type f = ({
  DragPattern,
  DragPatternCancel,
  stamps:Stamps,
}) => any

const StampPanel:f = ({
  DragPattern = undefined,
  DragPatternCancel = undefined,
  stamps,
}) =>
  <div class={stamps.isPanelOpen ? style.stampPanelOpen : style.stampPanel}>
    {
      stamps.available.map(
        stamp => 
          <div class={style.stampPanelButton}>
            <StampButton
              isSelected={stamps.selected === stamp}
              stamp={stamp}
              DragPattern={DragPattern}
              DragPatternCancel={DragPatternCancel}
            />
          </div>
      )
    }
  </div>

export default StampPanel