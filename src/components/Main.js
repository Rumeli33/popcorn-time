import "./Main.css";
import moviesFromJson from "../data/movies.json";
import { useState } from "react";
function Main() {
  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const deleteMovie = (id) => {
    console.log("deleting a movie...", id);
    const newListOfMovies = moviesArr.filter((movie) => {
      return movie.id !== id;
    });
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
      {moviesArr.map((movieDetails) => {
        return (
          <div key={movieDetails.id} className="card card-movie">
            <h3> {movieDetails.title}</h3>
            <h4> Movie rating :</h4>
            <span> {movieDetails.rating}</span> <br /><br />

   {/*  Conditional Rendering with "Logical && Operator"  */}

        { movieDetails.rating >= 8 &&  <span className="badge">!!!Recommended!!!</span>}

            <p>Year: {movieDetails.year}</p>
            <br />

    {/*  Conditional Rendering with "Ternary Operator"  */}
            { movieDetails.imgURL 
              ? <img src={movieDetails.imgURL} alt="" /> 
              : <img src="https://via.placeholder.com/182x268" alt =""/>
            }

<br/>


            Genre: <br /> <br />
            {movieDetails.genres.map((elm) => {
              return <span>{elm}</span>;
            })}
            <br /> <br />
            <button
              className="btn"
              onClick={() => {
                deleteMovie(movieDetails.id);
              }}
            >
              Delete Movie
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
