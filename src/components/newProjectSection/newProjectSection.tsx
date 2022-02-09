import React from "react";
import style from "./newProjectSection.module.css";

const NewProjectSection = (): JSX.Element => {
  return (
    <div className={style.itemsHolder}>
      <div className={style.newProjectItem}>
        <div className={style.iconHolder}>
          <img src={"/Assets/layer.svg"} alt="layerImage" />
        </div>
        <div className={style.textHolder}>
          <span>New Project</span>
          <span>Create you own new Project</span>
        </div>
        <div className={style.addHolder}>
          <img src={"/Assets/Group 24191.svg"} alt="plusImage" />
        </div>
      </div>
    </div>
  );
};

export default NewProjectSection;
