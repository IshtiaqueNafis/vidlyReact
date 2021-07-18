import React from 'react';
import Alert from "../UI/Alert.UI";
import Pagination from "../common/pagination.component";
import {getMovies} from "../../Starter Code/services/fakeMovieService";
import {getGenres} from "../../Starter Code/services/fakeGenreService";
import {paginate} from "../../utils/paginatia";
import ListGroup from "../common/ListGroup";
import _ from 'lodash';
import MovieTable from "./MovieTable.Component";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [], // its empty now
            pageSize: 4,
            currentPage: 1,
            sortColumn: {path: 'title', order: 'asc'}

        }

    }

    componentWillMount = () => {
        const genres = [{name: 'All Genre', _id: ''}, ...getGenres()]
        this.setState({movies: getMovies(), genres: genres});
    };

    getPageData = () => {

        const {pageSize, currentPage, movies: allMovies, selectedGenre,sortColumn} = this.state;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies; // this filters the movies
        //selectedGenre && selectedGenre._id?  this make sure both values are the same
        const sorted=   _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize)
        return {totalCount:filtered.length,data:movies}
    };

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
        this.setState({selectedGenre: genre, currentPage: 1}) // adding dynamic classs property
    }
    handleSort = (sortColumn) => {

        this.setState({sortColumn})
    }

    //endregion

    render() {

         const {totalCount,data} = this.getPageData();
        const {pageSize, currentPage, sortColumn} = this.state;
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
                    <Alert movieCount={totalCount}/>
                    <MovieTable
                        movies={data}
                        sortColumn={sortColumn}
                        onDelete={this.onDeleteHandler}
                        onLike={this.onLikeHandler}
                        onSort={this.handleSort}
                    />

                    <Pagination
                        itemsCount={totalCount}
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