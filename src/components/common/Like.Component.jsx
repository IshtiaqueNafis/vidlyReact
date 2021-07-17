import React from 'react';
// input whether its liked or not.
const Like = (props) => {
    let classes='fa fa-heart'
    const onLikeHandler=() =>{
      props.onLike()
    }
    if (!props.liked) classes+='-o';
    return (
        <i className={classes} aria-hidden='true' onClick={onLikeHandler}/>
    );
};

export default Like;