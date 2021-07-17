import './App.css';
import {getMovies} from "./Starter Code/services/fakeMovieService";
import Movie from "./components/Movie/Movie.Component";
import {useState} from "react";

const App = () => {

    const[movies,setMovies] = useState(getMovies())

    const onDeleteHandler =(movie) =>{

        setMovies(movies.filter(m=>m._id!==movie._id))

    }

    return (

        <main className="container">
            {console.log(movies)}
           <Movie movies={movies}  onDeleteHandler={onDeleteHandler}/>

        </main>
    );
};

export default App;
