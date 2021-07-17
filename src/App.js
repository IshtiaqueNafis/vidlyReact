import './App.css';
import Movie from "./components/Movie/Movie.Component";
import {Component} from "react";

class App extends Component {
    render() {


        return (

            <main className="container">
                <Movie/>

            </main>
        );
    }
}

export default App;
