import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
import Tabs from "./components/Tabs";
import Default from "./components/Default";
import Settings from "./components/Settings";
import GA from "./components/GA";

enum TabsValues {
  Default = "Default",
  GA = "GA",
  Settings = "Settings",
}

const App = () => {
  const [currentTab, setCurrentTab] = useState("Default");
  const tabHandler = (e) => {
    setCurrentTab(e.target.innerText);
  };

  const renderCurrentTab = () => {
    switch (currentTab) {
      case TabsValues.Default:
        return <Default />;
      case TabsValues.GA:
        return <GA />;
      case TabsValues.Settings:
        return <Settings />;
      default:
        return <Default />;
    }
  };

  return (
    <>
      <Tabs tabHandler={tabHandler} />
      {renderCurrentTab()}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
