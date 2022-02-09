import style from "./App.module.css";
import HeaderSection from "./components/headerSection/HeaderSection";
import NewProjectSection from "./components/newProjectSection/newProjectSection";
import Recipes from "./components/recipesSection/Recipes";
import RecentProjects from "./components/recentProjectsSection/recentProjects";
import React, { useEffect, useState } from "react";
import { getData } from "./api/api";
import {IData, Irecent, Irecipes } from "./types";
import { AxiosResponse } from 'axios'


export const DataContext = React.createContext<IData | undefined>(undefined);

function App(): JSX.Element {
  let [data, setData] = useState<IData | undefined>(undefined);
  useEffect(() => {
    const getDataFromServer = async () => {
        let result:IData =  await getData();
      return result
    };
    getDataFromServer().then((result:IData) => setData(result));
  }, []);

  return (
    <div className={style.app}>
      <HeaderSection />
      <div className={style.content}>
        <NewProjectSection />
        {data ? (
          <div>
            <DataContext.Provider value={data}>
              <Recipes />
              <RecentProjects />
            </DataContext.Provider>
          </div>
        ) : (
          <div>Wait</div>
        )}
      </div>
    </div>
  );
}

export default App;
