import React from "react";
import { useDispatch } from "react-redux";

type ButtonProps = {
  children?: any;
  attrs?: any[];
  onButton?: any;
  type: 'primary' |'secondary'
};

const Button: React.FC<ButtonProps> = ({ type, onButton, children, attrs }) => {
  const dispatch = useDispatch();

  return (
    <button 
        className={`button button-${type}`} 
        onClick={() => onButton()}
        {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
