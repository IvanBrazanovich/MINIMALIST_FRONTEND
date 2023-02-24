import React, { useState } from "react";
import LayoutPage from "../../components/app/LayoutPage";
import Formularios from "../../components/components_front/Formularios";
import Texts from "../../components/components_front/Texts";
import styles from "../../styles/pages/newProject.module.scss";
import { useDispatch } from "react-redux";

const NewProject = () => {
  const [selected, setSelected] = useState([]);

  const toggle = (item) => {
    if (selected.includes(item)) {
      return setSelected(selected.filter((itemArr) => itemArr !== item));
    }

    setSelected([...selected, item]);
  };

  return (
    <div className={styles.newProject}>
      <h1 className={styles.newProject__heading}>Crea tu nuevo Proyecto</h1>

      <div className={styles.newProject__flexContainer}>
        <div className={styles.newProject__sidebar}>
          <Formularios />
          <Texts />
        </div>
        <div className={styles.newProject__layout}>
          <LayoutPage />
        </div>
      </div>
    </div>
  );
};

export default NewProject;
