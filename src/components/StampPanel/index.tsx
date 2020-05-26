import {Action, Component} from 'hyperapp'
import {Grid, Layer, Stamps, State} from '/types'
import {Payload} from '/actions/SetLayerStyle'
import SetLayerStyle from '/actions/SetLayerStyle'
import StampButton from '/components/StampButton'
import style from './style.css'

const StampPanel: Component<{layers: Layer[]; stamps: Stamps}> =
  ({layers, stamps}) =>
    <div class={
      stamps.isPanelOpen
        ? style.stampPanelOpen
        : style.stampPanel
    }>
      <input
        type='range'
        min='0'
        max='255'
        value={layers[0].foregroundColor.r}
        oninput={
          (state: State, event: { target: HTMLInputElement }): [Action<State, Payload>, Payload] => [
            SetLayerStyle,
            {
              index: 0,
              foregroundColor: {r: parseInt(event.target.value)},
            },
          ]
        }
      />
      <input
        type='range'
        min='0'
        max='255'
        value={layers[0].foregroundColor.g}
        oninput={
          (state: State, event: { target: HTMLInputElement }): [Action<State, Payload>, Payload] => [
            SetLayerStyle,
            {
              index: 0,
              foregroundColor: {g: parseInt(event.target.value)},
            },
          ]
        }
      />
      <input
        type='range'
        min='0'
        max='255'
        value={layers[0].foregroundColor.b}
        oninput={
          (state: State, event: { target: HTMLInputElement }): [Action<State, Payload>, Payload] => [
            SetLayerStyle,
            {
              index: 0,
              foregroundColor: {b: parseInt(event.target.value)},
            },
          ]
        }
      />
      <input
        type='range'
        min='0'
        max='255'
        value={layers[0].trailAlpha}
        oninput={
          (state: State, event: { target: HTMLInputElement }): [Action<State, Payload>, Payload] => [
            SetLayerStyle,
            {
              index: 0,
              trailAlpha: parseInt(event.target.value),
            },
          ]
        }
      />
      {
        stamps.available.map(
          (stamp: Grid) =>
            <div class={style.stampPanelButton}>
              <StampButton
                isSelected={stamps.selected === stamp}
                stamp={stamp}
              />
            </div>
        )
      }
    </div>

export default StampPanel
