import './App.css';
import Movies from "./components/movies/movies";
import NavBar from "./components/UI/NavBar";
import React from "react";
import {Route, Switch,Redirect} from "react-router-dom";
import Customers from "./components/customers/customers";
import Rental from "./components/rentals/rental";
import NotFound from "./components/common/not-found";
import MovieDetails from "./components/movies/movieDetails";
const App = () => {



    return (
        <React.Fragment>
       <NavBar/>
        <main className="container">
            <Switch> {/*Switch is used to match the parameter of an object  works like a if else statment */}
                <Route path='/movieDetails/:_id' component={MovieDetails}/> {/*This path='/movieDetails/:_id' component={MovieDetails} --> this is the matching parameter component means it will go to Movies */}
                <Route path='/movies' component={Movies}/> {/* this will go to movies */}
                <Route path='/customers' component={Customers}/>{/* this will go to customers */}
                <Route path='/rentals' component={Rental}/> {/* this will go to rentals */}
                <Route path='/not-found' component={NotFound}/> {/* this will go to found */}
                <Redirect from='/' exact to ='/movies'/> {/* Redriect is passed here to make sure if slash is typed it goes to movies table */}
                <Redirect to="/not-found"/>  {/* this is done when none of the parameter matches*/}
            </Switch>
        </main>
        </React.Fragment>
    );
};

export default App;
