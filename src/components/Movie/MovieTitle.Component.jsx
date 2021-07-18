import React from 'react';
import Like from "../common/Like.Component";
import Button from "../UI/Button.UI.Jsx";
import * as PropTypes from "prop-types";

class MovieTitle extends React.Component {
    raiseSort = path =>{
        const sortColumn = {...this.props.sortColumn}
        if(sortColumn.path===path){
            sortColumn.order=(sortColumn.order ==='asc') ?'desc':'asc';
        }else{
            sortColumn.path = path;
            sortColumn.order ='asc';
        }
        this.props.onSort(sortColumn)
    }
    render() {
        let {movies, onLike, onDelete} = this.props;


        return (
            <table className="table table-hover">
                <thead>
                <tr className="table-dark">
                    <th onClick={() => this.raiseSort('title')} scope="col">Title</th>
                    <th onClick={() => this.raiseSort('genre.name')} scope="col">Genre</th>
                    <th onClick={() => this.raiseSort('numberInStock')} scope="col">Stock</th>
                    <th onClick={() => this.raiseSort('dailyRentalRate')} scope="col">Rate</th>
                    <th scope="col"/>
                    <th scope="col"/>
                </tr>
                </thead>

                <tbody>
                {movies.map(movie => (
                    <tr className="table-info" key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like liked={movie.liked} onClick={() => onLike(movie)}/>
                        </td>
                        <td>
                            <Button buttonType={'btn btn-danger'} onClick={() => onDelete(movie)}>
                                <i className="fa fa-trash"/>
                            </Button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        );
    }
}

MovieTitle.propTypes = {
    movies: PropTypes.any,
    onLike: PropTypes.any,
    onDelete: PropTypes.any,
    onSort: PropTypes.any
}

export default MovieTitle;