import React, {Component} from 'react';

class Logout extends Component {
    componentDidMount() {
        localStorage.removeItem('token'); // this destorys the id
        window.location = "/";
    }

    render() {
        return null;
    }
}

export default Logout;