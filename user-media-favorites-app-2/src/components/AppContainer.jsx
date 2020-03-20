import React, { Component, Fragment } from 'react';
import Favorites from './Favorites';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>Your Favorite Media App</h1>
                <Favorites/>
            </Fragment>
         );
    }
}
 
export default AppContainer;