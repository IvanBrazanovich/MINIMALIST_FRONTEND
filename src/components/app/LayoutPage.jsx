import React from "react";
import styles from "../../styles/components/layoutPage.module.scss";
import GridLayout from "react-grid-layout";
import { useDispatch, useSelector } from "react-redux";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { getFromCodeComponent } from "../../helpers/getFromCodeComponent";
import { addComponent, layoutShift } from "../../features/app/createPageSlice";

const LayoutPage = () => {
  // React Redux
  const { layout } = useSelector((state) => state.createPage);
  const dispatch = useDispatch();

  const onDrop = (elemParams) => {
    dispatch(addComponent(elemParams));
  };

  const changeLayout = (e) => {
    console.log(e);
    dispatch(layoutShift(e));
  };

  return (
    <div className={styles.layoutPage}>
      <GridLayout
        className={`${styles.gridLayout} layout`}
        layout={layout}
        cols={12}
        onDrop={onDrop}
        allowOverlap={false}
        onLayoutChange={changeLayout}
        rowHeight={30}
        isDroppable={true}
        width={1200}
        useCSSTransforms={true}
      >
        {layout?.map((component) => {
          return (
            <div key={component.i} className={styles.component}>
              {getFromCodeComponent(component.i)}
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default LayoutPage;
