import React from "react";
import style from "./RecentItem.module.css";

interface Iprops {
  text: string;
  logoSrc: string;
  version: string;
}

const RecentItem = ({ text, logoSrc, version }: Iprops) => {
  return (
    <div className={style.RecentItem}>
      <div className={style.itemInfo}>
        <div className={style.logoHolder}>
          <img src={"/Assets/ProjectIcons/" + logoSrc} alt="logo" />
        </div>
        <span>{text}</span>
        <span>{"Version " + version}</span>
      </div>
      <div>
        <img src={"/Assets/3 Dotts workspace.svg"} alt="dots" />
      </div>
    </div>
  );
};

export default RecentItem;
