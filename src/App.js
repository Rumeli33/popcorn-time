import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesFromJson from "./data/movies.json";
function App() {
  //state declaration

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);
  // delete function

  const deleteMovie = (id) => {
    //calc the new list of movies
     const newListOfMovies = moviesArr.filter((movie) => {
          return movie.id !== id;
        });
        //update state
        setMoviesArr(newListOfMovies);
        console.log(newListOfMovies);
      };
  return (
    <div className="App">
  
      <Header  moviesArr ={moviesArr} />
   

      <Main moviesArr ={moviesArr} deleteMovieCB={deleteMovie}></Main>
      <hr />
      <Footer />
      <hr />
    </div>
  );
}

export default App;
