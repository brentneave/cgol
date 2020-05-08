
// @ts-ignore
import style from './style.css'

const ControlButton = ({
  isDisabled = false,
  key = '',
  label = undefined,
  onclick = undefined
} = {}) =>
  <button
    class={style.controlButton}
    disabled={isDisabled}
    onclick={onclick ? onclick : null}
  >
    { label ? label : null }
  </button>

export default ControlButton
