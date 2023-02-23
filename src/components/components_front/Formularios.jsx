import React from "react";
import HOCwithDraggable from "../../hocs/HOCwithDraggable";
import Formulario1 from "./Formularios/Formulario1";
import Formulario2 from "./Formularios/Formulario2";
import Formulario3 from "./Formularios/Formulario3";

const Formularios = () => {
  const Form1 = HOCwithDraggable(Formulario1);
  const Form2 = HOCwithDraggable(Formulario2);
  const Form3 = HOCwithDraggable(Formulario3);

  return (
    <div>
      <Form1 />
      <Form2 />
      <Form3 />
    </div>
  );
};

export default Formularios;
