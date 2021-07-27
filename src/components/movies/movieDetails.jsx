import React from 'react';

class MovieDetails extends React.Component {

    render() {
        return (
            <div>
             <h1>{this.props.match.params._id}</h1>
                {/*this.props.match.params is part of the react router dom it passes id so it will be passed here */}
                <button onClick={()=>this.props.history.push("/")}> go back</button>
                {/*props.history.push("/") is used to go back to a previous page */}
            </div>
        );
    }
}

export default MovieDetails;