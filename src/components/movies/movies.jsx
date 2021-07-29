import React, {Component} from 'react';
import {getMovies} from "../../Starter Code/services/fakeMovieService";
import {getGenres} from "../../Starter Code/services/fakeGenreService";
import Pagination from "../common/pagination";
import {paginate} from "../../utils/paginate";
import ListGroup from "../common/listgroup";
import MoviesTable from "./moviesTable";
import _ from "lodash"
import Alert from "../UI/Alert.UI";
import {Link} from "react-router-dom";

class Movies extends Component {

//region state intalization
    constructor(props, context) {
        super(props, context);
        this.state = {
            movies: [], // holds all the movie object
            pageSize: 4, // 4 pages in movie.
            currentPage: 1, // current page
            genres: [], // what genres the movies will have
            sortColumn: {path: 'title', order: 'asc'} // this is the path of the SortColumn done by path and based onorder by default set to asc

        }
    }

//endregion
//region movies and genre mounting

    componentDidMount() {
        const genres = [{name: "All Genres", _id: ""}, ...getGenres()] // creating a new array with item All Genres
        this.setState({movies: getMovies(), genres})
    }

    // endregion
//region on click event
    //region movieCrud
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies})

    }
    handleLike = movie => {
        const movies = [...this.state.movies]; // close array
        const index = movies.indexOf(movie); // find the index
        movies[index] = {...movies[index]}; // this changes only single values
        movies[index].liked = !movies[index].liked; // this changes false to true rue to false.
        this.setState({movies: movies}) // set the state

    }
    //endregion

    //region Sorting and paging
    handlePageChange = page => this.setState({currentPage: page}) // handle pageCHange
    handleSort = sortColumn => this.setState({sortColumn})  // handle sorting for column
    //endregion

    //region Genre Selection
    handleGenreSelect = genre => this.setState({selectedGenre: genre, currentPage: 1}) // page is being reset cause not all the filter does not ahve same number of items.
    //endregion

    //region GetpageData
    getPageData = () => {
        const {movies: allMovies, currentPage, pageSize, selectedGenre, sortColumn} = this.state;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies; // returns allmoves if no match is found with genre else filter based on genre.
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize); // this puts 4 movies per page

        return {totalCount: filtered.length, data: movies} // return them as object
        //region comments & expalanation
        /*
         const filtered = selectedGenre ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies; --> this gets all the movies or movies based on selected criteria
         const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]) -> filtered is the array of movies, [sortColumn.path][iterate] decides column to sort it by, and [sortColumn.order] this will decide whther it will be asc or desc
          const movies = paginate(sorted, currentPage, pageSize);  then this paginate movies pretty much based on filtered and sorted data.
         */


        //endregion

    }

    //endregion

    //endregion

    render() {
        //region object destructure.
        const {currentPage, pageSize, selectedGenre, sortColumn, handleGenreSelect} = this.state;
        const {totalCount, data: movies} = this.getPageData();
        //endregion


        return (

            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres} // this passes genre array object
                        onItemSelect={this.handleGenreSelect} // this does the handleGeenreSelect like which one has been selected
                        selectedItem={selectedGenre} // this passes selected genre
                    />
                </div>


                <div className="col">
                    <Link className="btn btn-primary mt-1" to="/movies/new">New Movie</Link>
                    <Alert movieCount={totalCount}/>
                    <MoviesTable movies={movies} // --> this is for the movies object array
                                 onLike={this.handleLike} //--> this will deal with handleLike
                                 sortColumn={sortColumn} // --> this is the sort column object passed for column
                                 onDelete={this.handleDelete} //--> this will deal with handle delete
                                 onSort={this.handleSort} // --> this for handling sort
                    />
                    <Pagination itemsCount={totalCount} // this how many items will be passed
                                pageSize={pageSize} // set to 4 by defaut
                                onPageChange={this.handlePageChange} // get page of items with change.
                                currentPage={currentPage} // whats the current page right now

                    />
                </div>


                {/*region Comments
                Page Interface
                itemsCount={count} --> how many items will be passed
                pageSize={this.state.pageSize} --> how many items will show per page if its 4 pages will show each pages.
                onPageChange={this.handlePageChange --> this will handle page change like how the page will change.
                currentPage= keeps track of what page I am currently at.
                endregion */}
            </div>
        );
    }
}

export default Movies;