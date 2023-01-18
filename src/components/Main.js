import "./Main.css";
import moviesFromJson from "../data/movies.json";
import { Movie } from "./Movie";
import { useState } from "react";
 export default function Main() {
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
  // Conditional rendering with environment variables
  let titleMessage = "";

  if (moviesArr.length > 0) {
    titleMessage = <h2> the current number of movies :{moviesArr.length}</h2>;
  } else {
    titleMessage = <h2> Sorry!!! no movie </h2>;
  }

  return (
    <div className="Main">
      {titleMessage}
      {moviesArr.map((movieObj) => {
        return (
          <>    {/*we pass as props movieDetails and also the reference of the delete function */}
                        <Movie
                        key ={movieObj.id} 
                        movieDetails ={movieObj} 
                        deleteMovieCB={deleteMovie}/>
                        {/* <button onClick={() => { deleteMovie(movieObj.id) }}>Delete this movie</button> */}
                    </>
                   
    
  );
})}
</div> )}


