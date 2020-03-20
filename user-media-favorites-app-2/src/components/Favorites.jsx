import React, { Component, Fragment } from 'react';
import Movies from './Movies';
import Albums from './Albums';
import '../App.css';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state ={
         
        }
      
    }


    render() {
        let userMovie1, userMovie2, userAlbum1, userAlbum2;
        // prompt user for their 2 favorite movies and albums
        userMovie1 = prompt('Enter your first favorite movie:');
        userMovie2 = prompt('Enter your second favorite movie:');
        userAlbum1 = prompt('Enter your first favorite album:');
        userAlbum2 = prompt('Enter your second favorite album:');

        //place the user's input into arrays for movies and albums seperately
        let movieList = [userMovie1,userMovie2];
        let albumList = [userAlbum1,userAlbum2];

        return (
            <Fragment>
                <div className="container">
                    <h2 className="header">This is a list of your favorite movies and albums</h2>

                    <div className="movies">
                        <Movies  movieList={movieList}/>
                    </div>

                    <div className="albums">
                        <Albums albumList={albumList}/>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Favorites;