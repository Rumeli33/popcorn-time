export const Movie = (props) => {
   
    
    
    return (
        <div key={props.movieDetails.id} className="card movie">
            <p>{props.movieDetails.title}</p>
            <p>Rating: {props.movieDetails.rating}</p>

            {/*  Conditional Rendering with "Logical && Operator"  */}
            {props.movieDetails.rating > 8 && <p className="badge">RECOMMENDED</p>}

            <p>Year: {props.movieDetails.year}</p>
            <p>Genres: {props.movieDetails.genres.map((elm)=> {return <h3 key={props.movieDetails.title}>{elm}</h3>})}</p>

            {/*  Conditional Rendering with "Ternary Operator"  */}
            {props.movieDetails.imgURL ?
                <img src={props.movieDetails.imgURL} alt="" /> :
                <img src="https://via.placeholder.com/182x268" alt="" />
            }
 {/*  the call to this function :deleteMovieCB will be done in Main.js  */}
            <button onClick={() => { props.deleteMovieCB(props.movieDetails.id)  }}>Delete this movie</button>
        </div>
    ) }