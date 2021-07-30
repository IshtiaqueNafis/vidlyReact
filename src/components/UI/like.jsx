import React from 'react';
//input prperty liked boolean
// output: Onclick()
const Like = props => {
    let classes = `fa fa-heart`;
    if (!props.liked) classes += `-o`;
    return (

        <i className={classes} onClick={props.onClick} aria-hidden="true"/>
    );
};

export default Like;