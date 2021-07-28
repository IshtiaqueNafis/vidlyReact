import React from 'react';
import Input from "../common/input";
import Joi from 'joi-browser'
import Form from "../common/form"; // this the libray for validation of input.
class LoginForm extends Form  { // extends from form.

    //region state [data= object holds {username: '', password: ''} for input,error will hold input ]
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {username: '', password: ''}, // will be used as a validation to use on data
            errors: {} // this will take care of errors.
        }
    }

//endregion

    //region schema --> decides input criteria

    schema = {
        username: Joi.string().required().label("Username"),// user name and password both expected to be an input of string and both has to be mandotry
        password: Joi.string().required().label("Password"), // label is used to create friendly messages

    }
    //endregion


    //region methods ->[doSubmit()]

    //region do submit method --> submit form based on login criteria.
     doSubmit =() => {
        console.log('submitted')
     }
    //endregion
    //endregion

    render() {
        //region object destrucure
        const {data, errors} = this.state
        //endregion
        return (
            <div>
                <h1>
                    Login
                </h1>
                <form onSubmit={this.handleSubmit}>
                    {/*this is a form submit function its built in on funnction */}
                    <Input
                        name='username' // this is the username propertybeing passed notice that both username in here and state must match
                        value={data.username} // this the value of the data object name
                        label="UserName" // label can be anything I want it to be
                        onChange={this.handleChange} // isreferencing onChange method.
                        error={errors.username} // error object is being passed this wll check whether or not there is any errors.

                    />

                    <Input
                        name='password' // this is the username propertybeing passed notice that both password in here and state must match
                        value={data.password} // this the value of the data object name
                        label="Password" // label can be anything I want it to be
                        onChange={this.handleChange} // isreferencing onChange method.
                        error={errors.password} // error password is being passed this will check whther or not there is any errors.
                    />

                    <button
                        disabled={this.validate()
                        } /* --> this disabled()
                        is passed here instead of this.validate() cause
                         the function must execute so reference will not work here.
                         trutht--> means null no error else means there is error.
                        */
                        className="btn btn-primary mt-2">Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;