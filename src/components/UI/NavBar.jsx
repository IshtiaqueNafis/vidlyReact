import React from 'react';
import {Link,Switch,Route} from "react-router-dom";
import Movies from "../movies/movies";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Vidly</Link>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Movies</Link>
                            {/*This goes to home page of movies works same as Router methid but needs a link */}
                        </li>
                        <li className="nav-item">
                            <Link to="/customers" className="nav-link">Customers</Link>
                            {/*Goes to customers */}
                        </li>
                        <li className="nav-item">
                            <Link to="/Rentals" className="nav-link">Rentals</Link>
                            {/*Go to rentals */}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;