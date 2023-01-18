import "./Header.css"


function Header(props) {
  return (
    <div className="Header">
      <h1>Popcorn Time</h1>
     
      <h2> the current number of movies :{props.moviesArr.length}</h2>;
    </div>
  );
}

export default Header;
