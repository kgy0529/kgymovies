import React from 'react';

const Movie = ({movie}) => {
    return(
        <div className="movie">
            <div className="movie-title">{movie.title}</div>
            <span className="movie-year">{movie.year}</span>
            <div><button onClick={() =>{reomoveMovie}}>삭제</button></div>
        </div>
        )
};

export default Movie;