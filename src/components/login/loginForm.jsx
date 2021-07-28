import React, {Component} from 'react';
import Input from "../common/input";
import Joi from 'joi-browser' // this the libray for validation of input.
class LoginForm extends Component {

//region single  Source of truth aka state
    constructor(props, context) {
        super(props, context);
        this.state = {
            account: {username: '', password: ''}, // will be used as a validation to use on account
            errors: {} // this will take care of errors.
        }
    }

//endregion

    //region schema
    // this will be used for input of joi valodation
    // mot part of state cause it does not change.
    schema = {
        username: Joi.string().required().label("Username"),// user name and password both expected to be an input of string and both has to be mandotry
        password: Joi.string().required().label("Password"), // label is used to create friendly messages

    }
    //endregion


    //region methods

    //region  validate method
    // validates input
    validate = () => {
        //region object destrucure
        const options = {abortEarly: false}
        const {error} = Joi.validate(this.state.account, this.schema, options);
        //endregion
        // region code explanation `
        /*
        this.state.account --> this.state.account this is the object of the form with userInput has property of username and password
                           --> this is the object checked for validation
        this.schema--> is the this.schema
                   --> is the joy object also has same property as this.state.account but they are based on criteria property
        abortEarly: false} --> this means lets say more than one error is found it will show more than one error message.
         */
        //endregion
        if (!error) return null; //-> if error is falst means no value there what so ever error result.error does not have any messages of error
        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;

            //region Code explanation
            /*
            result.error.details --> this goes into result.error.details --> result is the object got from --> Joi.validate(this.state.account, this.schema, {abortEarly: false});
                                 --> result has access to result.error.details property

            for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
            --> means item will loopthrough the objects with item.path[0] -> is where all the error messages is located.

            details: Array(2) -->
            0: {message: ""username" is not allowed to be empty", path: Array(1), type: "any.empty", context: {…}}
            1: {message: ""password" is not allowed to be empty", path: Array(1), type: "any.empty", context: {…}}

             */

            //endregion
        }

        return errors;
    }


    //endregion


    //region  sumbitform
    // submits the form
    handleSubmit = e => {

        e.preventDefault(); // this helps with default method which loads the page.-> also e stands for prevent default
        const errors = this.validate(); // this will check for validation
        this.setState({errors: errors || {}}) // --> error property is being set here also -> this prevents null error this error has a key and value here with {} empty
        if (errors) return; // if there is any error this helps with to make sure the program is running fine. this quits the program tight away.
        console.log('submitted')


    }
    //endregion
    //region validate property
    validateProperty = ({name, value}) => {
        const obj = {[name]: value}; //-> by using the object property as input has name and value from keyboard inout will be in this name or password and value is fixed so no need to use computed property
        const schema = {[name]: this.schema[name]}
        //region explanation
        //  const schema = {[name]: this.schema[name]}
        /*
          -->  const schema --> schema have to be reitnalized here again cause it would not work cause it is checking after submission not before
               --> {[name]: this.schema[name]}
                   --> [name] is computed property here
                       --> thus this can be either name or any property I would want.
                       -> so for example if name="username" key will be username
                   -->  this.schema[name] --> same concept as before will use computed property to acess the schema.
         */
        //endregion
        const {error} = Joi.validate(obj, schema) // then compare one value at a time depends on input.
        return error ? error.details[0].message : null; // -> if error is not null return error.message else return null. means no error what so ever.

    }
    //endregion
    //region handleChange

    handleChange = ({currentTarget: input}) => {
        // this.currentTarget has been renamed to input here
        const errors = {...this.state.errors}; //--> clones all the error messages.
        const errorMessage = this.validateProperty(input); // -> this recives input from the user.

        if (errorMessage) errors[input.name] = errorMessage; //--> this sets the value dynamcially if errormessage is truthy
        else delete errors[input.name]; //-> this is a built in method deletes property

        const account = {...this.state.account}; // cloning the object
        account[input.name] = input.value; //-> input.name set it to input.value.
        //region comment and explantion
        /*
         account[input.name] -->  name="username"  this is from username notice that key an property name in state both arte same
         account[input.name] -->  name="password"  this is from password notice that key an property name in state both are same
         this makes the program dynamic and easy to run.
         */
        //endregion
        this.setState({account, errors}); // -->updating the state.
    }
    //endregion
    //endregion
    render() {
        //region object destrucure
        const {account, errors} = this.state
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
                        value={account.username} // this the value of the account object name
                        label="UserName" // label can be anything I want it to be
                        onChange={this.handleChange} // isreferencing onChange method.
                        error={errors.username} // error object is being passed this wll check whether or not there is any errors.

                    />

                    <Input
                        name='password' // this is the username propertybeing passed notice that both password in here and state must match
                        value={account.password} // this the value of the account object name
                        label="Password" // label can be anything I want it to be
                        onChange={this.handleChange} // isreferencing onChange method.
                        error={errors.password} // error password is being passed this will check whther or not there is any errors.
                    />

                    <button
                        disabled={this.validate()
                        } /* --> this disabled()
                        is passed here instead of this.validate() cause
                         the function must execute so reference will not work here.
                         trutht--> means null was returned falsy means--> there is issue with input
                        */
                        className="btn btn-primary mt-2">Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;