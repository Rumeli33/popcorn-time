import "./Main.css";

import { Movie } from "./Movie";

 export default function Main(props) {



  // Conditional rendering with environment variables
  let titleMessage = "";

  if (props.moviesArr.length > 0) {
    titleMessage = <h2> the current number of movies :{props.moviesArr.length}</h2>;
  } else {
    titleMessage = <h2> Sorry!!! no movie </h2>;
  }

  return (
    <div className="Main">
      {titleMessage}
      {props.moviesArr.map((movieObj) => {
        return (
          <>    {/*we pass as props movieDetails and also the reference of the delete function */}
                        <Movie
                        key ={movieObj.id} 
                        movieDetails ={movieObj} 
                        deleteMovieCB={props.deleteMovieCB}/>
                        {/* <button onClick={() => { deleteMovie(movieObj.id) }}>Delete this movie</button> */}
                    </>
                   
    
  );
})}
</div> )}


