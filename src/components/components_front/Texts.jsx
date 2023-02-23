import React from "react";
import HOCwithDraggable from "../../hocs/HOCwithDraggable";
import Text1 from "./Texts/Text1";
import Text2 from "./Texts/Text2";
import Text3 from "./Texts/Text3";

const Texts = () => {
  const TextWithDraggable1 = HOCwithDraggable(Text1);
  const TextWithDraggable2 = HOCwithDraggable(Text2);
  const TextWithDraggable3 = HOCwithDraggable(Text3);

  return (
    <div>
      <TextWithDraggable1 />
      <TextWithDraggable2 />
      <TextWithDraggable3 />
    </div>
  );
};

export default Texts;
