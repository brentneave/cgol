import {Component, VNode} from 'hyperapp'

import styles from './styles.css'

const AppLayout: Component<{
  canvas: VNode;
  bottomLeft: VNode;
  bottomRight: VNode;
  stampPanel: VNode;
  cursor: VNode;
}> = ({
  canvas,
  bottomLeft,
  bottomRight,
  stampPanel,
  cursor,
}) =>
  <div class={styles.appLayout}>
    <div class={styles.appLayoutCanvas}>
      {canvas}
    </div>
    <div>
      <div class={styles.appLayoutStampPanel}>
        {stampPanel}
      </div>
      <div class={styles.appLayoutBottomLeft}>
        {bottomLeft}
      </div>
      <div class={styles.appLayoutBottomRight}>
        {bottomRight}
      </div>
    </div>
    <div class={styles.cursor}>
      {cursor}
    </div>
  </div>

export default AppLayout
