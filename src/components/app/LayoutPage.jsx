import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/components/layoutPage.module.scss";
import GridLayout from "react-grid-layout";
import { useDispatch, useSelector } from "react-redux";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { getFromCodeComponent } from "../../helpers/getFromCodeComponent";
import { addComponent, layoutShift } from "../../features/app/createPageSlice";

const LayoutPage = () => {
  // state
  const [gridWidth, setGridWidth] = useState(100);

  // React Redux
  const { layout } = useSelector((state) => state.createPage);
  const dispatch = useDispatch();
  const divChange = useRef(null);

  // On resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const computedStyle = getComputedStyle(divChange.current);
    const elementWidth = divChange.current.clientWidth; // width with padding

    const contentWidth =
      elementWidth -
      (parseFloat(computedStyle.paddingLeft) +
        parseFloat(computedStyle.paddingRight));
    setGridWidth(contentWidth);
  };

  const onDrop = (layout, droppedElement) => {
    dispatch(addComponent(droppedElement));
  };

  const changeLayout = (e) => {
    console.log(layout);
    console.log(e);
    if (!e.length) return;

    if (e[e.length - 1].i === "__dropping-elem__") return;
    dispatch(layoutShift(e));
  };

  return (
    <div ref={divChange} className={styles.layoutPage}>
      <GridLayout
        className={`${styles.gridLayout} layout`}
        layout={layout}
        onDrop={onDrop}
        allowOverlap={false}
        onLayoutChange={changeLayout}
        rowHeight={30}
        isDroppable={true}
        width={gridWidth}
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
