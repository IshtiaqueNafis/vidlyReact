// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";


class Form extends Component {

    //region state[data:object will hold items,errors: pbject will hold input errors]
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errors: {}
        }
    }


    //endregion

    //region methods --> [Validate(),validateProperty(),submitForm(),handleChange(),renderBUtton(), renderInput(),renderSelect()]
    //region  validate method -->validates input when submiteed button is clicked.

    validate = () => {
        //region object destrucure --> options  and error object
        const options = {abortEarly: false}
        const {error} = Joi.validate(this.state.data, this.schema, options); //-> return an error object.
        // region code explanation `-->  const {error} = Joi.validate(this.state.data, this.schema, options)
        /* this.state.data
           --> will get all the data included in the proerty
           -->this.schema will get all the property from the schema
            Joi.validate --> will compare both of the property to see if there are any errors.
             options --> {abortEarly: false} is set to make sure more than one error message is shown

         */
        //endregion
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

    //region validate property --> validate input during typing
    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        //region explaning -->[name]:value
        // both are part of currentTarget property from event object
        //-> [name] --> will print the computed property of the object thus based on name the the value will be saved
                       //-> if name is set to name it will find value associated with name
        // --> value --> is what ever the user typed.
        //endregion
        const schema = {[name]: this.schema[name]}
        //region explanation --> const schema = {[name]: this.schema[name]}
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
        const {error} = Joi.validate(obj, schema)
        //region explaning-->  const {error} = Joi.validate(obj, schema)
        /*
        const {error} = Joi.validate(obj, schema)
        --> error object will be set if obj does not meet the criteria for schema which sets whether the state of the object is valid or not
           --> if an error object is created which means there is some serious issue with the input.
           --> if its not means input is good.
         */
        //endregion
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
        //region {currentTarget: input} --> explanation
        // currentTarget --> is the property of event object Returns it when its triggered
          // input--> has been named here
        //endregion
        const errors = {...this.state.errors}; //--> clones all the error messages from the state.
        const errorMessage = this.validateProperty(input); // -> this recives input from the user.
        if (errorMessage) errors[input.name] = errorMessage; //--> this sets the value dynamcially if errormessage is truthy
        else delete errors[input.name]; //-> this is a built in method deletes property

        const data = {...this.state.data}; // cloning the object
        data[input.name] = input.value; //-> input.name set it to input.value.
        //region comment and explantion -->   data[input.name] = input.value;
        /*
         data[input.name] -->  name="username"  this is from username notice that key an property name in state both arte same
         data[input.name] -->  name="password"  this is from password notice that key an property name in state both are same
         this makes the program dynamic and easy to run.
         */
        //endregion
        this.setState({data, errors}); // -->updating the state.
    }
    //endregion

    //region  renderButton --> renders button for forms
    renderButton = label => <button disabled={this.validate()} className="btn btn-primary mt-2">{label}</button>;


    //endregion

    //region renderSelect() --> renders drop down button 
    renderSelect = (name, label, options) => {
        const {data, errors} = this.state; //->getting the state property

        return (

            <Select
                name={name} // this is name of the geenre id_aka key.
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}

            />

        )
    }

    //endregion

    //region  renderInput --> rendersinput for input from the user
    renderInput = (name, label, type = "text") => {
        //type is a string with text value.
        const {data, errors} = this.state;   // based on program running errors will be set.


        return (
            <Input
              //region
                /*
                type={type} --> this will decide what type of input I would wnat the input to be this could from a number or string
                 name={name} --> name is works as a key to set the name property and id property which is unique.
                 value={data[name]}  --> value
                                     --> is used to ace4ss the value of the
                                     --> property lets say data key is name if I used data[name] and nafis was typed this will acess data[name] ==> nafis will be passed as a value
                 label={label} --> shows the label aka what user will see in the form.

                 */
              //endregion
                type={type} // type of the input field
                name={name} // this is the username propertybeing passed notice that both username in here and state must match
                value={data[name]} // this the value of the data object name

                label={label}// label can be anything I want it to be
                onChange={this.handleChange} // isreferencing onChange method.
                error={errors[name]} // error object is being passed this wll check whether or not there is any errors.

            />
        );
    }


//endregion
//endregion

}

export default Form;