import React from 'react';
import Form from "../common/forms/form";
import Joi from 'joi-browser';
import * as userService from '../../services/userService';


class Register extends Form {
    //region State -->  data: {username: "", password: "", name: "",} & errors.
    constructor() {
        super();
        this.state = {
            data: {username: "", password: "", name: "",},
            errors: {}
        }
    }

    //endregion

    //region schema --> setting validation for email,passwprd and name
    schema = {
        username: Joi.string().email().required().label("Email"),
        password: Joi.string().min(5).required().label("Password"),
        name: Joi.string().required().label("Name")
    }
    //endregion

    //region methods ->[doSubmit()]

    //region do submit method --> submit form based on forms criteria.
    doSubmit = async () => {
        try {
            await userService.register(this.state.data) // this registers a user.
        } catch (ex) {
            if (ex.response && ex.response.status === 400) { // check if there is an error or not if there is an error show this.
                const errors = {...this.state.errors} // cloning error
                errors.username = ex.response.data; // set errors name // this will show user already registered.
                this.setState({errors})
            }
        }

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
                    {this.renderInput('username', 'Email')}
                    {this.renderInput('password', 'Password', "password")}
                    {this.renderInput('name', 'name')}
                    {this.renderButton('Register')}
                </form>
            </div>
        );
    }
}

export default Register;