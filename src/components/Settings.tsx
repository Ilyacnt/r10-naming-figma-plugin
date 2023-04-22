import React from "react";
import Input from "../ui/Input";
import { useSelector } from "react-redux";
import { setNumberOfResizes } from '../store/reducerSettingsActions'

const Settings = () => {
  const { numberOfResizes } = useSelector((state) => state.settings)


  return (
    <div className="main-container">
      <Input
        label="Number&nbsp;of&nbsp;resizes: "
        placeholder="3"
        onInput={setNumberOfResizes}
        value={numberOfResizes}
      />
    </div>
  );
};

export default Settings;
