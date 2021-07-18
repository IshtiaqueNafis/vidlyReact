import React from 'react';

const Alert = ({movieCount}) => {
    return (
        <div className={`alert alert-dismissible mt-2 ${movieCount>0?'alert-success': 'alert-danger'}`}>
           <strong>{movieCount>0?`there are ${movieCount} on the database`:`there are ${movieCount} movies on the database`}</strong>
        </div>
    );
};

export default Alert;