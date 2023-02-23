import Formulario1 from "../components/components_front/formularios/Formulario1";
import Formulario2 from "../components/components_front/formularios/Formulario2";
import Formulario3 from "../components/components_front/formularios/Formulario3";
import Text3 from "../components/components_front/texts/Text3";
import Text2 from "../components/components_front/texts/Text2";
import Text1 from "../components/components_front/texts/Text1";

const getFromCodeComponent = (code) => {
  const component_type = code[0];
  const component_serie = code[2];

  switch (component_type) {
    case "F":
      return getFormulario(component_serie);
      break;
    case "T":
      return getText(component_serie);
      break;
    default:
      break;
  }

  return <div>hola</div>;
};

const getFormulario = (component_serie) => {
  switch (component_serie) {
    case "1":
      return <Formulario1 />;
      break;
    case "2":
      return <Formulario2 />;
      break;
    case "3":
      return <Formulario3 />;
      break;
    default:
      break;
  }
};
const getText = (component_serie) => {
  switch (component_serie) {
    case "1":
      return <Text1 />;
      break;
    case "2":
      return <Text2 />;
      break;
    case "3":
      return <Text3 />;
      break;
    default:
      break;
  }
};

export { getFromCodeComponent };
