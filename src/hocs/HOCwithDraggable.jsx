import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { changeDraggin } from "../features/app/createPageSlice";

export default function HOCwithDraggable(HocComponent) {
  const dispatch = useDispatch();
  const handleDrag = (e) => {
    if (!e.target) return null;
    const componentCode = e.target
      .querySelector("[code-type]")
      .getAttribute("code-type");
    dispatch(changeDraggin(componentCode));
  };

  const handleDragEnd = () => {
    dispatch(changeDraggin(""));
  };

  return class extends Component {
    render() {
      return (
        <div
          draggable={true}
          onDragEnd={handleDragEnd}
          onDragStart={handleDrag}
        >
          <HocComponent />
        </div>
      );
    }
  };
}
