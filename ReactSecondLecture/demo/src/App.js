
import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {

  const movies = [
    { title: 'Man of Steel' , year: 2008, cast: ['Henry Cavil', 'Pesho'] },
    { title: 'Harry Potter' , year: 2004, cast: ['Daniel Radclieff', 'Ema Watson'] }
  ]
  return (
    <div className="App">
      <h1>React Demo</h1>
      <Counter canReset={false} />
      <Timer start={1}/>
      <MovieList movies={movies} />

   </div>
  );
}

export default App;
