import React from "react";
import style from "./headerSection.module.css";

interface IProps {
  logoSrc: string;
  text: string;
}
const SettingsItem = ({ logoSrc, text }: IProps): JSX.Element => {
  return (
    <div className={style.settingsItem}>
      <img src={logoSrc} alt="logo" />
      <span>{text}</span>
    </div>
  );
};

export default SettingsItem;
