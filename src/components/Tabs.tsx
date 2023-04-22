import React, { useEffect, useState } from "react";
import Tab from "./Tab";

type Props = {
	tabHandler: (e) => void
}

const Tabs: React.FC<Props> = ({ tabHandler }: Props) => {
  const tabsData = [
    {
      id: 1,
      value: "Default",
    },
    {
      id: 2,
      value: "GA",
    },
    {
      id: 3,
      value: "Settings",
    },
  ];


  return (
    <div className="tabs-container">
      <div id="tabs" className="tabs">
        {tabsData.map((tab) => (
          <Tab key={tab.id} tab={tab} currentTab={tabHandler} />
        ))}
        <span className="glider"></span>
      </div>
    </div>
  );
};

export default Tabs;
