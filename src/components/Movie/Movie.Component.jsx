import React, {useState} from 'react';
import MovieTitle from "./MovieTitle.Component";
import Alert from "../UI/Alert.UI";
import Pagination from "../common/pagination.component";
import {getMovies} from "../../Starter Code/services/fakeMovieService";


const Movie = (props) => {
//region states and variables 
    const[movies,setMovies] = useState(getMovies())
    let pageSize =4;
 //endregion
   //region Methods 
    const onDeleteHandler = (movie) =>setMovies(movies.filter(m => m._id !== movie._id)) // deletes movies from database 
    const onLikeHandler = (movie) => { // likes unlikes a movie
        let updatedMovies = movies.map(m => {
            if (m._id === movie._id) {
                return {...m, liked: !m.liked} // this makes the opposite of the movie unliked
            }
            return m;
        })

        setMovies(updatedMovies)

    }
    //endregion
 

    return (
        <React.Fragment>

            <Alert movieCount={movies.length}/>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"/>
                    <th scope="col"/>
                </tr>
                </thead>
                <tbody>

                {movies.map(movie =>
                    <MovieTitle key={movie._id}
                                movie={movie}
                                onDelete = {onDeleteHandler}
                                onLike={onLikeHandler}

                    />
                )}
                </tbody>
            </table>
            <Pagination itemsCount={movies.length} pageSize={pageSize}  />
        </React.Fragment>
    );
};

export default Movie