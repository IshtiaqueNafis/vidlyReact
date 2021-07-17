import React from 'react';

const Button = (props) => {
    const onDelete =() =>{
       props.onDelete();
    }
    return (


        <td>
            <button className={props.buttonType} onClick={onDelete}>
                {props.children}
            </button>
        </td>
    );
};

export default Button