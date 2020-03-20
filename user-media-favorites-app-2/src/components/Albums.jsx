import React, { Component, Fragment } from 'react';

class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                 <h3>Albums</h3>
                {this.props.albumList.map(
                    (album,inx) => {
                        return (
                            <div key = {inx}>
                                <p>{album}</p>
                            </div>
                        )
                    }
                )}
            </Fragment>
         );
    }
}
 
export default Albums;