import React from 'react'

type ButtonProps = {
    children?: any
    attrs?: any[]
    onButton?: any
    type: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({ type, onButton, children, attrs }) => {
    return (
        <button className={`button button-${type}`} onClick={() => onButton()} {...attrs}>
            {children}
        </button>
    )
}

export default Button
