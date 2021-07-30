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
import SearchBox from "../common/searchbox";

class Movies extends Component {

    //region state intalization --> movies:[],pagesize(int),currentpage:(int),searchQuery:'',selectedGenre:null,searchcolumn{path,order}
    constructor(props, context) {
        super(props, context);
        this.state = {
            movies: [], // holds all the movie object
            pageSize: 4, // 4 pages in movie.
            currentPage: 1, // current page
            searchQuery: '', // this is used for searching and item
            selectedGenre: null,
            genres: [], // what genres the movies will have
            sortColumn: {path: 'title', order: 'asc'} // this is the path of the SortColumn done by path and based onorder by default set to asc
        }
    }

//endregion

    //region componentDidMount()-->  movies and genre mounting

    componentDidMount() {
        const genres = [{name: "All Genres", _id: ""}, ...getGenres()] // creating a new array with item All Genres
        this.setState({movies: getMovies(), genres})
    }

    // endregion

    //region on click event [handledelete(),handlelike(),handleChange(),handleGenreSelect()]

    //region handleDelete(movie)  --> deletes movie
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies})

    }
    //endregion

    //region   handleLike(movie) --> likes and unlikes a movie.
    handleLike = movie => {
        const movies = [...this.state.movies]; // close array
        const index = movies.indexOf(movie); // find the index
        movies[index] = {...movies[index]}; // this changes only single values
        movies[index].liked = !movies[index].liked; // this changes false to true rue to false.
        this.setState({movies: movies}) // set the state

    }
    //endregion

    //region handlePageChange(page) --> does page change, handleSort(sortColumn)--> sort based on clicked column

    handlePageChange = page => this.setState({currentPage: page}) // takes page as a parameter ans sets current page to passed value.
    handleSort = sortColumn => this.setState({sortColumn})  // takes sortColumn as a parameter ans sets current page to passed value.
    //endregion

    //region handleGenreSelect(genre)  --> select genres and set current page
    handleGenreSelect = genre => this.setState({selectedGenre: genre, currentPage: 1})
    //get genre from parameter and set it as current genre and also set page to 1 as some genres might have more than 1 page
    //endregion

    //region  handleSearch(query) --> searches for item
    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
        //region  this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 }); --> explanation
        /*
         searchQuery is set to query --> which is a empty string
         selectedGenre is null cause the word could be any genre so its not limited
         currentPage is set to 1 so the first page is shown
        */
        //endregion
    };
    //endregion

    //region getPageData () --> sets how the page will look like.
    getPageData = () => {
        const {movies: allMovies, currentPage, pageSize, selectedGenre, sortColumn,searchQuery} = this.state;
        //region explaining     const {movies: allMovies, currentPage, pageSize, selectedGenre, sortColumn,searchQuery} = this.state;
        /*
           movies: allMovies --> this for all the movies  also has been renamed into allMovies
           cuurentPage --> what the current page is going to be.
           pageSize --> how many items per page
           selectedGenre --> would be on the sorting column like what column has been selected.
         */
        //endregion
        let filtered;
        filtered = allMovies; 
        if(searchQuery){
            filtered= allMovies.filter(m=>m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
            // filter movies based on search query
        }else if(selectedGenre && selectedGenre._id){
            filtered = allMovies.filter(m=>m.genre._id ===selectedGenre._id) // filtermovies that matches gnere
        }
        const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
        //region const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]) -->explanation
        /*
           _.orderBy --> is a loddash method which sorts the column based on sorted.
           filtered --> is the array of the object
           sortColumn.path] --> based on crtieria program will be shown.
           [sortColumn.order] --> sets the order is it based on higest to lowest or lowest to highest


         */
        //endregion
        const movies = paginate(sorted,currentPage,pageSize) // get movies based sorting,currentpage and pagesize criteria.


        return {totalCount:filtered.length,data:movies} // return this as object

    }

    //endregion

    //endregion

    render() {
        //region object destructure.
        const {currentPage, pageSize, selectedGenre, sortColumn, searchQuery} = this.state;
        const {totalCount, data: movies} = this.getPageData(); //-> get the data from count and movies.
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
                    <SearchBox value={searchQuery} // is the query from the search.
                               onChange={this.handleSearch}/>
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