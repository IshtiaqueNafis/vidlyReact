import React from 'react';
import Input from "../common/input";
import Joi from 'joi-browser'
import Form from "../common/form"; // this the libray for validation of input.
class LoginForm extends Form { // extends from form.

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
    doSubmit = () => {
        console.log('submitted')
    }
    //endregion
    //endregion

    render() {

        return (
            <div>
                <h1>
                    Login
                </h1>
                <form onSubmit={this.handleSubmit}>
                    {/*this is a form submit function its built in on funnction */}
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', "password")}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm;