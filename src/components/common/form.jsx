// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import Joi from "joi-browser";

class Form extends Component {

    //region state[data:object will hold items,errors: pbject will hold input errors]
    constructor() {
        super();
        this.state = {
            data: {},
            errors: {}
        }
    }

    //endregion
    //region methods --> [Validate(),validateProperty(),submitForm(),handleChange()]
    //region  validate method -->validates input when typing

    validate = () => {
        //region object destrucure
        const options = {abortEarly: false}
        const {error} = Joi.validate(this.state.data, this.schema, options);
        //endregion
        // region code explanation `
        /*
        this.state.data --> this.state.data this is the object of the form with userInput has property of username and password
                           --> this is the object checked for validation
        this.schema--> is the this.schema
                   --> is the joy object also has same property as this.state.data but they are based on criteria property
        abortEarly: false} --> this means lets say more than one error is found it will show more than one error message.
         */
        //endregion
        if (!error) return null; //-> if error is falst means no value there what so ever error result.error does not have any messages of error
        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;

            //region Code explanation
            /*
            result.error.details --> this goes into result.error.details --> result is the object got from --> Joi.validate(this.state.data, this.schema, {abortEarly: false});
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
    //region validate property --> validate input after submission
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
    //region  sumbitForm method --> submits the form
    handleSubmit = e => {

        e.preventDefault(); // this helps with default method which loads the page.-> also e stands for prevent default
        const errors = this.validate(); // this will check for validation
        this.setState({errors: errors || {}}) // --> error property is being set here also -> this prevents null error this error has a key and value here with {} empty
        if (errors) return; // if there is any error this helps with to make sure the program is running fine. this quits the program tight away.
        this.doSubmit();


    }
    //endregion
    //region handleChange -->updates the state

    handleChange = ({currentTarget: input}) => {
        // this.currentTarget has been renamed to input here
        const errors = {...this.state.errors}; //--> clones all the error messages.
        const errorMessage = this.validateProperty(input); // -> this recives input from the user.

        if (errorMessage) errors[input.name] = errorMessage; //--> this sets the value dynamcially if errormessage is truthy
        else delete errors[input.name]; //-> this is a built in method deletes property

        const data = {...this.state.data}; // cloning the object
        data[input.name] = input.value; //-> input.name set it to input.value.
        //region comment and explantion
        /*
         data[input.name] -->  name="username"  this is from username notice that key an property name in state both arte same
         data[input.name] -->  name="password"  this is from password notice that key an property name in state both are same
         this makes the program dynamic and easy to run.
         */
        //endregion
        this.setState({data, errors}); // -->updating the state.
    }
    //endregion
    //endregion

}

export default Form;