import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Movies from "./components/movies/movies";
import Customers from "./components/customers/customers";
import NavBar from "./components/UI/NavBar";
import Rental from "./components/rentals/rental";
import NotFound from "./components/common/errorpage/not-found";
import LoginForm from "./components/forms/loginForm";
import './App.css';
import Register from "./components/forms/register";
import MovieForm from "./components/forms/movieForm";
import {ToastContainer} from "react-toastify"; // this for the toast container
import 'react-toastify/dist/ReactToastify.css'
import Logout from "./components/forms/logout";
import auth from "./services/authService";

class App extends React.Component {
    state = {}

    componentDidMount() {

        const user = auth.getCurrentUser() // get the current user from database,
        this.setState({user})

    }

    render() {


        return (
            <React.Fragment>
                <NavBar user={this.state.user}/>
                <ToastContainer/>
                <main className="container">
                    <Switch> {/*Switch is used to match the parameter of an object  works like a if else statment */}
                        <Route path='/login' component={LoginForm}/> {/*this is for logging in */}
                        <Route path='/logout' component={Logout}/> {/*this is for logging in */}
                        <Route path='/movies/:id' component={MovieForm}/> {/*this is for logging in */}

                        <Route path='/register' component={Register}/> {/*this is for logging in */}
                        <Route path='/movies' component={Movies}/> {/* this will go to movies */}
                        <Route path='/customers' component={Customers}/>{/* this will go to customers */}
                        <Route path='/rentals' component={Rental}/> {/* this will go to rentals */}
                        <Route path='/not-found' component={NotFound}/> {/* this will go to found */}
                        <Redirect from='/' exact
                                  to='/movies'/> {/* Redriect is passed here to make sure if slash is typed it goes to movies table */}
                        <Redirect to="/not-found"/> {/* this is done when none of the parameter matches*/}
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
