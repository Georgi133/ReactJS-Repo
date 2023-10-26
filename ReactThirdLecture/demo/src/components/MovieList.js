import Movie from "./Movie";
import React from "react";

export default function MovieList({ movies, onMovieDelete, onMovieSelect }) {

    // const movieElements = [];

    // for (const movie of movies) {
    //     // movieElements.push(React.createElement(Movie, movie));
    //     movieElements.push(<li><Movie {...movie}/></li>)
    // }

    // let movieList = movies.map(movie => <li><Movie {...movie}/></li>)

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                 <Movie {...movie} 
                 onMovieDelete={onMovieDelete} 
                 onMovieSelect={onMovieSelect}
                 />
             </li>
            ))}
        </ul>
    );
    
}