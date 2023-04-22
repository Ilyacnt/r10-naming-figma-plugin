import React, { useState } from "react";
import { useDispatch } from "react-redux";

type InputProps = {
  label: string;
  placeholder: string;
  onInput: (value: any) => any;
  value: string;
  attrs?: any[]
};

const Input: React.FC<InputProps> = ({ label, placeholder,  onInput, value, ...attrs }) => {
  const dispatch = useDispatch()

  return (
    <div className="input" {...attrs}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => dispatch(onInput(e.target.value))}
      />
    </div>
  );
};

export default Input;