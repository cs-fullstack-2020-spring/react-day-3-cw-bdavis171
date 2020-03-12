import React, {Component} from 'react';

class Albums extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('Albums mounted');
        
    }
    render() {
        return(
            <div>
                {/* print the album property in a p tag */}
                <p>{this.props.album}</p>
            </div>
        );
    }
}

export default Albums;