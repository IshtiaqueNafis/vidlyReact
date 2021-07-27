import React from 'react';

const Input = ({label, name, onChange, value}) => {
    //region  parameter explanation
    /*
    label--> this for the label like whats the output is going to be
    name --> will be used for id and name and html for
    onChange --> is a function that sets value for state or input
    value -> is for updaring the state as input being typed
     */
    //endregion
    return (
        <div className="form-group row">
            <label htmlFor={name}>{label}</label>
            {/*htmlFor replaces For in  for in html in general */}
            <input
                value={value}  // value is setbased on state so its fast and comes in as single soruce of truth.
                onChange={onChange} // // this works with change of the input like what can be changed when user types something
                autoFocus // autofocous focuses on auto when user types somethign.
                id={name} // is is username id and user name in userName from form are the same class.
                name={name} // this will be used to acess the value dynamically.
                type="text"
                className="form-control"/>
        </div>
    );
}


export default Input;