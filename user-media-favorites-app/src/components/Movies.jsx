import React, {Component} from 'react';

class Movies extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('Movies mounted');
    }
    render() {
        return (
            <div>
                {/* print the movie property in a p tag */}
            <p>{this.props.movie}</p>
            </div>
        );
    }
}

export default Movies;