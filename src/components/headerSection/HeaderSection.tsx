import React, { useState } from "react";
import style from "./headerSection.module.css";
import SettingsItem from "./settingsItem";

const HeaderSection = (): JSX.Element => {
  let [isBackToGlobal, setbackToGlobal] = useState(false);
  let [isUserSetting, setUserSettings] = useState(false);
  return (
    <div className={style.header}>
      <div
        className={style.companyInfo}
        onMouseLeave={() => setbackToGlobal(false)}
      >
        <img
          src={
            isBackToGlobal ? "/Assets/FLO.svg" : "/Assets/Button.Logo.Back.svg"
          }
          alt="logo"
          onMouseEnter={() => setbackToGlobal(true)}
        />
        {isBackToGlobal && (
          <span className={style.backToGlobalText}>Back to Global</span>
        )}
        <select>
          <option value="Company name"> Company name</option>
        </select>
      </div>
      <div className={style.userHandler}>
        <img src={"/Assets/icon.helpInfo.svg"} alt="helpIcon" />
        <select>
          <option value="Help & support">Help & support</option>
        </select>
        <img src={"/Assets/icon.activity.svg"} alt="messagesIcon" />
        <div
          className={style.imageHolder}
          onMouseEnter={() => setUserSettings(true)}
        >
          <img
            src={"/Assets/navigation Profile.svg"}
            alt="userlogo"
            onClick={() => setUserSettings(!isUserSetting)}
          />
          {isUserSetting && (
            <div
              className={style.userSettings}
              onMouseLeave={() => setUserSettings(false)}
            >
              <div className={style.UserInfo}>
                <span>Gordon Smith</span>
                <span>gordons@gmail.com</span>
              </div>
              <div className={style.UserInfoSettings}>
                <SettingsItem
                  text={"Personal Settings"}
                  logoSrc={"/Assets/ProjectIcons/user.svg"}
                />
                <SettingsItem
                  text={"Projects"}
                  logoSrc={"/Assets/ProjectIcons/projects.svg"}
                />
                <SettingsItem
                  text={"Orgenaizations"}
                  logoSrc={"/Assets/ProjectIcons/organis.svg"}
                />
                <SettingsItem
                  text={"Billing"}
                  logoSrc={"/Assets/ProjectIcons/billing.svg"}
                />
                <SettingsItem
                  text={"Logout"}
                  logoSrc={"/Assets/ProjectIcons/logout.svg "}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
