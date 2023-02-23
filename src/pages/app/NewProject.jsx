import React from "react";
import LayoutPage from "../../components/app/LayoutPage";
import Formularios from "../../components/components_front/Formularios";
import Texts from "../../components/components_front/Texts";
import styles from "../../styles/pages/newProject.module.scss";
import { useDispatch } from "react-redux";
import { addComponent } from "../../features/app/createPageSlice";

const NewProject = () => {
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
