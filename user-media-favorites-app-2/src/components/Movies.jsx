import React, { Component, Fragment } from 'react';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h3>Movies</h3>
                {this.props.movieList.map(
                    (movie,inx) => {
                        return (
                            <div key = {inx}>
                                <p>{movie}</p>
                            </div>
                        )
                    }
                )}
            </Fragment>
         );
    }
}
 
export default Movies;