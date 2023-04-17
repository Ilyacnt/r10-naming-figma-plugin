import React, { useState } from 'react'
import * as ReactDOM from "react-dom";
import "./ui.css";
import Tabs from './components/Tabs';

const App = () => {
    const [currentTab, setCurrentTab] = useState('Default');
    const tabHandler = e => {
        setCurrentTab(e.target.innerText);
    }


    return (
      <>
          <Tabs currentTab={tabHandler} />
          <div>{currentTab}</div>
      </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));