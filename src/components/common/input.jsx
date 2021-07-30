import React from 'react';

const Input = ({label, name, error,value,onChange }) => {
    //region  parameter explanation
    /*
    label--> this for the label like whats the output is going to be
    name --> will be used for id and name and html for
    error -> error is for any error related to the program.
  ...rest--> spreads the rest of the objects and values
     */
    //endregion
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value} // this will hold the value property of what user types
                onChange={onChange} // this a function deals with changing of the value
                id={name} // uniquly identifies an element
                name={name} // this works as a key to for example input[name] will be something like this to acees the value.

                className="form-control"/>

            {error && <div className="alert alert-danger">{error}</div>}
            {/*this checks whehter or not there is error by using error && program will execute if there any error.  */}


        </div>
    );
}


export default Input;