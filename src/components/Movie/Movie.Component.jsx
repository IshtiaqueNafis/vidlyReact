import React from 'react';
import MovieTitle from "./MovieTitle.Component";
import Alert from "../UI/Alert.UI";

const Movie = (props) => {
    const onDelete = (movie) =>{
     props.onDeleteHandler(movie)
    }

    return (
        <div>

            <Alert movieCount={props.movies.length}/>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"/>
                </tr>
                </thead>
                <tbody>

                {props.movies.map(movie =>
                    <MovieTitle key={movie._id}
                                movie={movie}
                                onDelete = {onDelete}

                    />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Movie