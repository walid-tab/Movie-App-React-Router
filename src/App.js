import {React,useState} from 'react'
import {Data} from './Data'
import SearchMovie from './Components/SearchMovie'
import MoviesList from './Components/MoviesList'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import MovieDetails from './Components/MovieDetails'

function App() {
  const [movies, setMovies] = useState(Data);
  const Addmovie=(newFilm)=>(setMovies([...movies,newFilm]))
  const [search, setSearch] = useState("");
  return (
    <div className="App">
        <SearchMovie Addmovie={Addmovie} search={search} setSearch={setSearch}/>        
        

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/movies' element={<MoviesList movies={movies} search={search}/>}/>
        <Route path='/movies/:id' element={<MovieDetails movies={movies}/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
