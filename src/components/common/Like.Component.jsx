import React from 'react';
// input whether its liked or not.
const Like = ({liked, onClick}) => {
    let classes='fa fa-heart'

    if (!liked) classes+='-o';
    return (
        <i className={classes} aria-hidden='true' onClick={onClick}/>
    );
};

export default Like;