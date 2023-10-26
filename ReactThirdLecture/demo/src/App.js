import MovieList from './components/MovieList';
// import { movies as movieData } from './movies'
import { useEffect, useState } from 'react';
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/movies.json`)
    .then(res => res.json())
    .then(data => { // data includes genres and movies
      setMovies(data.movies);
    });
  }, []);
  // empty array because i 
  // want this to happen after mounting

  const onMovieDelete = (id) => {
    setMovies(allMovies => allMovies.filter(x => x.id !== id));

  }

  const onMovieSelect = (id) => {
    setMovies(allMovies => allMovies.map(movie => movie.id === id ? {...movie, selected: true} : movie))
  }

  return (
    <div>
   <h1>Movies Collection</h1>

   <MovieList movies={movies} 
   onMovieDelete={onMovieDelete}
   onMovieSelect={onMovieSelect}/>
    </div>
  );
}

export default App;
