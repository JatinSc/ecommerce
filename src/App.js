import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieHeadings from './components/MovieHeadings';
import SearchBar from './components/SearchBar';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';


const App = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "Doctor Strange in the Multiverse of Madness",
      "Year": "2022",
      "imdbID": "tt9419884",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg"
    }, {
    "Title": "Top Gun: Maverick",
    "Year": "2022",
    "imdbID": "tt1745960",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
  },
  {
    "Title": "Avatar: The Way of Water",
    "Year": "2022",
    "imdbID": "tt1630029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg"
  },{
    "Title": "Jurassic World: Dominion",
    "Year": "2022",
    "imdbID": "tt8041270",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  },

  {
    "Title": "Minions: The Rise of Gru",
    "Year": "2022",
    "imdbID": "tt5113044",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_SX300.jpg"
  },
  {
    "Title": "Black Panther: Wakanda Forever",
    "Year": "2022",
    "imdbID": "tt9114286",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
  },
  {
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
  },
  {
    "Title": "Thor: Love and Thunder (2022)",
    "Year": "2022",
    "imdbID": "tt21375328",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTEyYjBhNzctYzc2Yy00NzcxLWE4ZmYtNjVjNDQwNmUwZmZmXkEyXkFqcGdeQXVyNTMxMTQ1NTk@._V1_SX300.jpg"
  }
])
  const [favourite,setFavourites] = useState([])
  const [SearchValue, setSearchValue] = useState('')
  const getMovieRequest = async () => {

    const url = `https://www.omdbapi.com/?s=${SearchValue}&apikey=2ff11752`

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson)
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [SearchValue]);


  useEffect(() => {
const movieFavourit = JSON.parse(
  localStorage.getItem('Movie-App-Favourite')
  );
setFavourites(movieFavourit);
  },[])
  const saveToLocalStorage = (items) => {
    localStorage.setItem('Movie-App-Favourite' , JSON.stringify(items));
  }

  const addFavouriteMovie = (movie) => {
    const  newFavouriteList = [...favourite, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourite.filter(
      (favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList)

  };





  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
   <MovieHeadings heading="Movies" author=" By JatinSc" />
   <SearchBar searchValue={SearchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList 
        movies={movies} 
        handelFavouritesClick={addFavouriteMovie} 
        FavouriteComponent={AddFavourite}/>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
   <MovieHeadings heading="Favourites" />
      </div>
      <div className='row'>
        <MovieList 
        movies={favourite} 
        handelFavouritesClick={RemoveFavouriteMovie} 
        FavouriteComponent={RemoveFavourite}/>
      </div>

    </div>
  );
}

export default App;
