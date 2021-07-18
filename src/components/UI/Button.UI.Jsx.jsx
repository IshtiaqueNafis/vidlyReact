import React from 'react';

const Button = ({buttonType, children, onClick}) => {

    return (

            <button className={buttonType} onClick={onClick}>
                {children}
            </button>

    );
};

export default Button