import './App.css';
import {getMovies} from "./Starter Code/services/fakeMovieService";
import Movie from "./components/Movie/Movie.Component";
import {useState} from "react";

const App = () => {

    const[movies,setMovies] = useState(getMovies())

    const onDeleteHandler =(movie) => setMovies(movies.filter(m => m._id !== movie._id))
    const onLikeHandler = (movie) =>{
    let updatedMovies = movies.map(m => {
        if(m._id===movie._id) {
            return {...m,liked:!m.liked} // this makes the opposite of the movie unliked
        }
        return m;
     })

        setMovies(updatedMovies)
    }

    return (

        <main className="container">
           <Movie movies={movies}  onDeleteHandler={onDeleteHandler} onLikeHandler={onLikeHandler} />

        </main>
    );
};

export default App;
