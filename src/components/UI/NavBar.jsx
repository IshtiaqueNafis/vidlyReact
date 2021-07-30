import React from 'react';
import {Link, Switch, Route, NavLink} from "react-router-dom";
import Movies from "../movies/movies";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Vidly</Link>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Movies</NavLink>
                            {/*This goes to home page of movies works same as Router methid but needs a link */}
                        </li>
                        <li className="nav-item">
                            <NavLink to="/customers" className="nav-link">Customers</NavLink>
                            {/*Goes to customers */}
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Rentals" className="nav-link">Rentals</NavLink>
                            {/*Go to rentals */}
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                            {/*Go to rentals */}
                        </li>

                        <li className="nav-item">
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                            {/*Go to rentals */}
                        </li>

                        <li className="nav-item">
                            <NavLink to="/newmovie" className="nav-link">New Movie</NavLink>
                            {/*Go to rentals */}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;