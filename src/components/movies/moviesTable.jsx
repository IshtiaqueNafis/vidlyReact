import React from 'react';
import Like from "../UI/like";
import Table from "../common/tables/table";
import Button from "../UI/Button.UI.Jsx.jsx";
import {Link} from "react-router-dom";

class MoviesTable extends React.Component {
 //region  table columnns
    columns = [
        {path: 'title', label: 'Title',content:movie=> <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like', content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>}, //
        {key: 'delete', content: movie => <Button buttonType={"btn btn-danger btn-md"} onClick={() => this.props.onDelete(movie)}><i className='fa fa-trash'/> </Button>}

        //region comments and explanation
        /*
          {key: 'like', content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>},
          --> key passed here as key
          --> content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/
              --> content is the key
              -->  movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/
                   --> movie is the parameter
                   --> => means this a function
                   -->  <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/
                        --> this a jsx component but it will be returned here
         */
        //endregion
    ];
//endregion
    render() {
        //region object destructuring
        const {movies, sortColumn, onSort} = this.props
        //endregion
        return (
          <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
        );
    }
}

export default MoviesTable;