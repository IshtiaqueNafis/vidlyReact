import React from 'react';
import Like from "../common/Like.Component";
import Button from "../UI/Button.UI.Jsx";
import * as PropTypes from "prop-types";
import TableHeader from "../common/tableHeader";
class MovieTitle extends React.Component {
columns = [
    {path:'title',label:'Title'}, // path will be used for sorting title will be used for sorting
    {path:'genre.name',label:'Genre'},
    {path:'numberInStock',label:'Stock'},
    {path:'dailyRentalRate',label:'Rate'},
    {key:'like'},// THESSE are empty cause favourite and delete has no sorting
    {key:'delete'}
]
    render() {
        let {movies, onLike, onDelete,onSort,sortColumn} = this.props;


        return (
            <table className="table table-hover">
                <thead>
               <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
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