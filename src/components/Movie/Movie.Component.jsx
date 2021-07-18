import React from 'react';
import MovieTitle from "./MovieTitle.Component";
import Alert from "../UI/Alert.UI";
import Pagination from "../common/pagination.component";
import {getMovies} from "../../Starter Code/services/fakeMovieService";
import {getGenres} from "../../Starter Code/services/fakeGenreService";
import {paginate} from "../../utils/paginatia";
import ListGroup from "../common/ListGroup";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [], // its empty now
            pageSize: 4,
            currentPage: 1,

        }

    }

    componentWillMount() {
        const genres = [{name:'All Genre'},...getGenres()]
        this.setState({movies: getMovies(), genres: genres});
    }

    onDeleteHandler = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id) // deletes movies from database
        this.setState({movies: movies})
    }
    onLikeHandler = (movie) => { // likes unlikes a movie
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;

        this.setState({movies});
    }
    handlePageChange = page => {
        this.setState({currentPage: page})
    }
    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre,currentPage: 1}) // adding dynamic classs property
    }


    //endregion

    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies,selectedGenre} = this.state;
        const filtered = selectedGenre && selectedGenre._id? allMovies.filter(m=>m.genre._id===selectedGenre._id):allMovies; // this filters the movies
        //selectedGenre && selectedGenre._id?  this make sure both values are the same
        const movies = paginate(filtered, currentPage, pageSize)
        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}



                    />
                </div>
                <div className="col">
                    <Alert movieCount={filtered.length}/>

                        <MovieTitle
                                    movies={movies}
                                    onDelete={this.onDeleteHandler}
                                    onLike={this.onLikeHandler}
                        />

                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>


            </div>
        );


    }
}

export default Movie;