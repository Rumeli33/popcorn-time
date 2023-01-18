import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesFromJson from "./data/movies.json";
function App() {
  //state declaration for list of movies

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);
// state declaration for form inputs
  const [title,setTitle] = useState("");
  const [rating,setRating] = useState(0);
  const [imgURL,setImgURL] =useState("");
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


const handleSubmit = (e) =>{
e.preventDefault();


const newMovie = {
 
  "title": title,
 
  "rating": rating,
  "imgURL": imgURL
};

setMoviesArr( (prevListOfMovies) => {
  const newList = [newMovie, ...prevListOfMovies];
  return newList;
});

//clear form
setTitle("");

setRating(0);

setImgURL("");


}



  return (
    <div className="App">
  
      <Header  moviesArr ={moviesArr} />
<form onSubmit={handleSubmit}>
<label>
Title: 
  <input type="text" name = "title"
  required={true}
   placeholder="enter the title" 
   value={title}  
   onChange={(e) => { setTitle(e.target.value) }} />

</label>

<label>
Rating:
<input type= "number" name ="rating" 
placeholder="rating"
 min ={ 1 }max = {10} 
 value ={rating}
onChange = {(e) =>{setRating(e.target.value)}} />
</label>
<label>
Image:
<input type ="text" name = "imgURL"
placeholder="Enter a URL for image"
 value ={imgURL}
onChange = {(e) =>{setImgURL(e.target.value)}} />
</label>
  <button>Create</button>
</form>

      <Main moviesArr ={moviesArr} deleteMovieCB={deleteMovie}></Main>
      <hr />
      <Footer />
      <hr />
    </div>
  );
}

export default App;
