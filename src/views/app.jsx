import DragPattern from '/actions/DragPattern'
import DragPatternCancel from '/actions/DragPatternCancel'
import DropPattern from '/actions/DropPattern'
import Randomise from '/actions/Randomise'
import Reset from '/actions/Reset'
import StampPanelOpen from '../actions/StampPanelOpen'
import Start from '/actions/Start'
import Stop from '/actions/Stop'
import Tick from '/actions/Tick'

import AppLayout from '/components/AppLayout'
import CellsCursor from '/components/CellsCursor'
import ControlBar from '/components/ControlBar'
import ControlButton from '/components/ControlButton'
import RasterCells from '/components/RasterCells'
import StampPanel from '/components/StampPanel'
import VectorCells from '/components/VectorCells'

// @ts-ignore
import utils from '/styles/utils.css'



const iconAdd = <VectorCells
  cellSize={2}
  cells={[
    [0,0,1,1,0,0],
    [0,0,1,1,0,0],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
    [0,0,1,1,0,0],
    [0,0,1,1,0,0],
  ]}
/>


// Root application view
export default ({
  canvasId, 
  cells,
  cellSize,
  draggingPattern,
  isRunning,
  isStampPanelOpen,
  mouse,
}) =>
  <AppLayout
    canvas={
      <RasterCells
        canvasId={canvasId}
        cells={cells}
        cellSize={cellSize}
        draggingPattern={draggingPattern}
        DropPattern={DropPattern}
      />
    }
    stampPanel={
      <StampPanel 
        isStampPanelOpen={isStampPanelOpen}
        draggingPattern={draggingPattern}
        DragPattern={DragPattern}
        DragPatternCancel={DragPatternCancel}
      />
    }
    bottomLeft={
      <ControlButton key="ctrl-add" onclick={[StampPanelOpen, { isOpen: !isStampPanelOpen }]} label={iconAdd} />
    }
    bottomRight={
      <ControlBar
        isRunning={isRunning}
        isStampPanelOpen={isStampPanelOpen}
        StampPanelOpen={StampPanelOpen}
        Reset={Reset}
        Randomise={Randomise}
        Start={Start}
        Stop={Stop}
        Tick={Tick}
      />
    }
    cursor={
      <CellsCursor
        cellSize={cellSize}
        draggingPattern={draggingPattern}
        mouse={mouse}
      />
    }
  />
  // <main class={utils.container}>
  
    
  //   {
  //     draggingPattern !== undefined && 
  //     <div 
  //       style={{
  //         width: `100px`,
  //         height: `100px`,
  //         position: 'fixed',
  //         left: 0,
  //         pointerEvents: 'none',
  //         top: 0,
  //         transform: `translate(${
  //           Math.round(mouse.x / cellSize) * cellSize
  //         }px, ${
  //           Math.round(mouse.y / cellSize) * cellSize
  //         }px)`,
  //       }}
  //     >
  //       {console.log('dragging: ', draggingPattern)}
  //       <VectorCells
  //         cells={draggingPattern}
  //         cellSize={cellSize}
  //       />
  //     </div>
  //   }
  // </main>

