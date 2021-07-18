import React from 'react';

const Button = (props) => {

    return (


        <td>
            <button className={props.buttonType} onClick={props.onClick}>
                {props.children}
            </button>
        </td>
    );
};

export default Button