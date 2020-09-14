import React from "react";
import SinglePoint from "../SinglePoint";
import { Draggable } from "react-beautiful-dnd";

function DraggableCard({ point, index }) {
  return (
    <Draggable key={point.pointId} draggableId={point.pointId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <SinglePoint pointInfo={point} />
        </div>
      )}
    </Draggable>
  );
}

export default DraggableCard;
