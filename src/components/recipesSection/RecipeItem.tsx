import style from "./RecipeItem.module.css";
import { usePalette } from "react-palette";
import { useState } from "react";

interface IProps {
  srcInAssets?: string;
  text?: string;
}

const RecipeItem = ({ srcInAssets, text }: IProps): JSX.Element => {
  const { data } = usePalette("/Assets/" + srcInAssets);

  let [isPreviewOpened, setPreviewOpened] = useState(false);

  return (
    <div className={style.recipeItem}>
      <div
        className={style.imageHolder}
        style={{ backgroundColor: data.darkVibrant }}
        onMouseLeave={() => setPreviewOpened(false)}
      >
        <img
          src={"/Assets/" + srcInAssets}
          alt="groupImage"
          onMouseEnter={() => setPreviewOpened(true)}
        />
        {isPreviewOpened && (
          <div className={style.preview}>
            <div>Use</div>
            <div>Preview</div>
          </div>
        )}
      </div>
      <div className={style.textHolder}>
        <div className={style.logoHolder}>
          <img src={"/Assets/UserLogo.svg"} alt="logoHolder" />
          <span>FL0 Recipe</span>
          <br />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default RecipeItem;
