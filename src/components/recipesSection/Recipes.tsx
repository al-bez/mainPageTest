import React from "react";
import style from "./recipes.module.css";
import RecipeItem from "./RecipeItem";
import { DataContext } from "../../App";

const Recipes = (): JSX.Element => {
  return (
    <div className={style.recipes}>
      <div className={style.title}>
        <div className={style.textHolder}>
          <div>
            <img src={"/Assets/Lightning.svg"} alt="lightingSvg" />
          </div>
          <div className={style.titleText}>
            <span>Recommended Recipes</span>
            <span>
              Browse through our recipes to learn about new use cases to
              implement your app
            </span>
          </div>
        </div>
        <div className={style.buttonsHolder}>
          <div className={style.viewButton}> View All</div>
          <div className={style.closeButton}>
            <img src={"/Assets/close.svg"} alt="closeButton" />
          </div>
        </div>
      </div>
      <div className={style.itemsHolder}>
        <DataContext.Consumer>
          {(value) =>
            value?.recipes.map((recipe) => (
              <RecipeItem
                key={recipe.id}
                srcInAssets={recipe.srcInAssets}
                text={recipe.text}
              />
            ))
          }
        </DataContext.Consumer>
      </div>
    </div>
  );
};

export default Recipes;
