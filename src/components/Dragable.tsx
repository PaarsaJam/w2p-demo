'use client'
import React from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import ParentComponent from './Parent';

const DragableBox = () => {

  const mouseEvevnt = (event: DraggableEvent, data: DraggableData) => {
    console.log('Event: ', event);
    console.log('Data: ', data);
  };

    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        onStart={mouseEvevnt}
        onDrag={mouseEvevnt}
        onStop={mouseEvevnt}>
        <div>
          <div className="handle"><ParentComponent /></div>
        </div>
      </Draggable>
    );
}

export default DragableBox
