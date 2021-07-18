import Like from "../common/Like.Component";
import Button from "../UI/Button.UI.Jsx";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";
import React, {Component} from 'react';
import Table from "../common/table";

class MovieTable extends Component {
    columns = [
        {path: 'title', label: 'Title'}, // path will be used for sorting title will be used for sorting
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like', content: movie=> <Like liked={movie.liked} onClick={() =>this.props.onLike(movie)}/>},// THESSE are empty cause favourite and delete has no sorting
        {key: 'delete', content: movie=><Button buttonType={'btn btn-danger'} onClick={() =>this.props.onDelete(movie)}> <i className='fa fa-trash'/> </Button>}
    ]

    render() {
        const {movies, onSort, sortColumn} = this.props;
        return (
            <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort}/>
        );
    }
}

export default MovieTable;