import React, {Component} from 'react';
import Movies from './Movies';
import Albums from './Albums';
import './component.css';


class Favorites extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //prompt the user for their first and second favorite movies
        let userMovie1 = prompt('Enter your favorite movie:');
        let userMovie2 = prompt('Enter your econd favorite movie:');
        //store the userMovie variable into an array
        let userMovieArray = [userMovie1, userMovie2];
        //prompt the user for their first and second favorite albums
        let userAlbum1 = prompt('Enter your favorite album:');
        let userAlbum2 = prompt('Enter your second favorite album:');
        //store the userAlbum variables into an array
        let userAlbumArray = [userAlbum1,userAlbum2];
        return (
            <div className = 'fav'>
                <h1>This is a list of your favorite movies and albums.</h1>
                <div className = 'movie-list'>
                    <h3>Movies</h3>
                    {/* print the userMovieArray */}
                {userMovieArray.map(
                    (el,index) => {
                        return <Movies key = {index} movie = {el}/>;
                    }
                )}
                </div>
                <div className= 'album-list'>
                    <h3>Albums</h3>
                    {/* print the userAlbumArray */}
                    {userAlbumArray.map(
                        (el,index) => {
                            return <Albums key = {index} album = {el}/>;
                        }
                    )}
                </div>

            </div>
        );
    }
}

export default Favorites;