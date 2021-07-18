import React from 'react';
import Like from "../common/Like.Component";
import Button from "../UI/Button.UI.Jsx";

const MovieTitle = ({movies, onLike,onDelete}) => {


    return (
        <table className="table table-hover">
            <thead>
            <tr className="table-dark">
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"/>
                <th scope="col"/>
            </tr>
            </thead>

            <tbody>
            {movies.map(movie =>(
                <tr className="table-info" key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Like liked={movie.liked} onClick={()=>onLike(movie)}/>
                    </td>
                    <td>
                        <Button buttonType={'btn btn-danger'} onClick={()=>onDelete(movie)}>
                            <i className="fa fa-trash"/>
                        </Button>
                    </td>
                </tr>
            ))}



            </tbody>
        </table>
    );
};

export default MovieTitle;