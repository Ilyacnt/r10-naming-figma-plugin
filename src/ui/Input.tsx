import React, { useState } from "react";

type Props = {
  label: string;
  placeholder: string;
};

const Input: React.FC<Props> = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input">
      <label htmlFor="test">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
