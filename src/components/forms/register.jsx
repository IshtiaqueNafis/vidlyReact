import React from 'react';
import Form from "../common/forms/form";
import Joi from 'joi-browser';

class Register extends Form {
    //region State -->  data: {username: "", password: "", name: "",} & errors.
    constructor() {
        super();
        this.state = {
            data: {email: "", password: "", name: "",},
            errors: {}
        }
    }
    //endregion

    //region schema --> setting validation for email,passwprd and name
    schema = {
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().min(5).required().label("Password"),
        name: Joi.string().required().label("Name")
    }
    //endregion

    //region methods ->[doSubmit()]

    //region do submit method --> submit form based on forms criteria.
    doSubmit = () => {
        console.log('submitted')
    }
    //endregion
    //endregion
    render() {


        return (
            <div className='row'>
                <h1>
                    Register
                </h1>
                <form onSubmit={this.handleSubmit}>
                    {/*this is a form submit function its built in on funnction */}
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('password', 'Password', "password")}
                    {this.renderInput('name', 'name')}
                    {this.renderButton('Register')}
                </form>
            </div>
        );
    }
}

export default Register;