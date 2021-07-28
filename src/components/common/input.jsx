import React from 'react';

const Input = ({label, name, error,...rest}) => {
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
            {/*htmlFor replaces For in  for in html in general */}
            <input
                {...rest} // this means rest of value will be set with rest of the value left.
                autoFocus // autofocous focuses on auto when user types somethign.
                id={name} // is is username id and user name in userName from form are the same class.
                name={name} // this will be used to acess the value dynamically.
               // type parameter makes it dynamic
                className="form-control"/>

            {error && <div className="alert alert-danger">{error}</div>}
            {/*this checks whehter or not there is error by using error && program will execute if there any error.  */}


        </div>
    );
}


export default Input;