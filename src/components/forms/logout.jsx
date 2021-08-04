import {Component} from 'react';
import auth from "../../services/authService"; // auth is created as an object

class Logout extends Component {
    componentDidMount() {
        auth.logout(); //thys auth. means it will use all the property from authService,
        window.location = "/";
    }

    render() {
        return null;
    }
}

export default Logout;