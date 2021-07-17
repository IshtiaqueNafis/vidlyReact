import React, {useState} from 'react';
import MovieTitle from "./MovieTitle.Component";
import Alert from "../UI/Alert.UI";
import Pagination from "../common/pagination.component";
import {getMovies} from "../../Starter Code/services/fakeMovieService";
import {paginate} from "../../utils/paginatia";


class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies(),
            pageSize: 4,
            currentPage: 1
        }
    }

    onDeleteHandler = (movie) => {
     const movies= this.state.movies.filter(m => m._id !== movie._id) // deletes movies from database
        this.setState({movies: movies})
    }
    onLikeHandler = (movie) => { // likes unlikes a movie
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }
    handlePageChange = page=>{
        this.setState({currentPage: page})
    }


    //endregion
    render() {
     const {length:count} = this.state.movies;
     const {pageSize,currentPage,movies:allMovies} = this.state;
     const movies = paginate(allMovies,currentPage,pageSize)
        return (
            <React.Fragment>

                <Alert movieCount={count}/>
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
                                    onDelete={this.onDeleteHandler}
                                    onLike={this.onLikeHandler}

                        />
                    )}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                />

            </React.Fragment>
        );


    }
}
export default Movie;