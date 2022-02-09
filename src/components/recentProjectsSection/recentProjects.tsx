import React from "react";
import style from "./recentProjects.module.css";
import RecentItem from "./RecentItem";
import { DataContext } from "../../App";

const RecentProjects = (): JSX.Element => {
  return (
    <div>
      <div className={style.header}>
        <div className={style.headerText}>
          <img src={"/Assets/vuesax-linear-calendar.svg"} alt="" />
          <span> Recent Projects</span>
        </div>
        <div className={style.headerSearch}>
          <input
            type="text"
            placeholder={"Find project"}
            className={style.headerInput}
          />
          <img src={"/Assets/Icon_search.svg"} alt="searchicon" />
        </div>
      </div>
      <div className={style.itemsHolder}>
        <DataContext.Consumer>
          {(value) =>
            value?.recent.map((item) => (
              <RecentItem
                key={item.id}
                logoSrc={item.iconSrc}
                text={item.text}
                version={item.version}
              />
            ))
          }
        </DataContext.Consumer>
      </div>
    </div>
  );
};

export default RecentProjects;
