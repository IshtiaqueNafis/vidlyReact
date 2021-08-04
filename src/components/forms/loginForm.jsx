import React from 'react';
import Joi from 'joi-browser'
import Form from "../common/forms/form"; // this the libray for validation of input.
import auth from '../../services/authService';

class LoginForm extends Form { // extends from form.

    //region state [data= object holds {username: '', password: ''} for input,error will hold input ]
    constructor() {
        super();
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

    //region do submit method --> submit form based on forms criteria.
    doSubmit = async () => {

        try {
            const {data} = this.state;
            await auth.login(data.username, data.password) // this gets jwt token which is used as an id card
           window.location = "/"; // this will cause full reload.


        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors}
                errors.username = ex.response.data;
                this.setState({errors})
            }
        }


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