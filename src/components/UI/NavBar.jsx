import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" >Vidly</NavLink>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/movies">
                            Movies
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/customers">
                            Customers
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/login">
                            Login
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/register">
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;