import React from 'react';
import {Redirect, Route} from "react-router-dom";
import MovieForm from "../forms/movieForm";
import auth from "../../services/authService";

const ProtectedRoute = ({path, component: Component, render, ...rest}) => {
    // componenet has to be renamed as componenet must be capital
    return (
        <Route
            {...rest} // this passes what ever property is there.
            render={props => {
                if (!auth.getCurrentUser()) return <Redirect to={{
                    pathname: '/login', // this where the current path will go.
                    state: {from: props.location} // where the users will go.
                }}
                />
                return Component ? <Component {...props}/> : render(props)
            }}

        />
    );
};

export default ProtectedRoute;