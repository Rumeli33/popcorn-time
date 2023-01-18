import "./Main.css";

import { Movie } from "./Movie";

 function Main(props) {



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
      {props.moviesArr.map((movieObj,index) => {
        return (
          <Movie 
            key={index} 
            movieDetails={movieObj} 
            callbackToDelete={props.callbackToDelete} />
        );
                   
    
      })}

      
</div>
)}
export default Main;


