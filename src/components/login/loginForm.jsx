import React, {Component} from 'react';
import Input from "../common/input";

class LoginForm extends Component {

//region single  Source of truth aka state
    constructor(props, context) {
        super(props, context);
        this.state = {
            account: {username: '', password: ''}
        }
    }

//endregion


    //region methods
    //region  sumbitform
    handleSubmit = e => {
        e.preventDefault(); // this helps with default method which loads the page.

        console.log('submitted')


    }
    //endregion
    //region handlechange
    handleChange = ({currentTarget: input}) => {
        // this.currentTarget has been renamed to input here
        const account = {...this.state.account}; // cloning the object
        account[input.name] = input.value;
        //region comment and explantion
        /*
         account[input.name] -->  name="username"  this is from username notice that key an property name in state both arte same
         account[input.name] -->  name="password"  this is from password notice that key an property name in state both are same
         this makes the program dynamic and easy to run.
         */
        //endregion
        this.setState({account: account}); // -->updating the state.
    }
    //endregion
    //endregion
    render() {
        //region object destrucure
        const {account} = this.state
        //endregion
        return (
            <div>
                <h1>
                    Login
                </h1>
                <form onSubmit={this.handleSubmit}>
                    {/*this is a form submit function its built in on funnction */}
                    <Input name='username' // this is the username propertybeing passed notice that both username in here and state must match
                           value={account.username} // this the value of the account object name
                           label="UserName" // label can be anything I want it to be
                           onChange={this.handleChange} // isreferencing onChange method.
                    />

                    <Input name='password' // this is the username propertybeing passed notice that both password in here and state must match
                           value={account.password} // this the value of the account object name
                           label="Password" // label can be anything I want it to be
                           onChange={this.handleChange} // isreferencing onChange method.
                    />

                    <button className=" btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;