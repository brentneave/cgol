import { Component } from 'hyperapp'

import style from './style.css'

const ControlButton: Component<{
  isDisabled?: boolean;
  label?: string;
  onclick?;
}> = ({
  isDisabled = false,
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
