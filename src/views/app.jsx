import DragPattern from '../actions/DragPattern'
import DragPatternCancel from '../actions/DragPatternCancel'
import DropPattern from '../actions/DropPattern'
import Randomise from '/actions/Randomise'
import Reset from '/actions/Reset'
import Start from '/actions/Start'
import Stop from '/actions/Stop'
import Tick from '/actions/Tick'

import AppLayout from '/components/AppLayout'
import CellsCursor from '/components/CellsCursor'
import ControlBar from '/components/ControlBar'
import RasterCells from '/components/RasterCells'
import StampBar from '/components/StampBar'

// @ts-ignore
import utils from '/styles/utils.css'


// Root application view
export default ({
  canvasId, 
  cells,
  cellSize,
  draggingPattern,
  isRunning,
  mouse,
  neighbours,
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
    bottomLeft={
      <StampBar 
        draggingPattern={draggingPattern}
        DragPattern={DragPattern}
        DragPatternCancel={DragPatternCancel}
      />
    }
    bottomRight={
      <ControlBar
        isRunning={isRunning}
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

