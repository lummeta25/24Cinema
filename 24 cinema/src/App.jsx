import Header from "./Heared.jsx"
import Footer from "./footer.jsx"
import Movie_Card from "./Movie-Card.jsx";
import Movie_lists from "./Movie_lists.jsx"

import './index.css'


function App() {

  const movies = [{name: "Oppenheimer", duration: "2:24"}, 
    {id: 1, name: "Anatomy of a Fall", duration: "2:24"}, 
    {id: 2, name: "Spider-Man: Across the Spider-Verse", duration: "2:24"}, 
    {id: 3, name: "The Zone of Interest", duration: "2:24"}, 
    {id: 4, name: "Killers of the Flower Moon", duration: "2:24"}];

  return(
    <>
      <Header></Header>
      <Movie_Card movie_img_src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" movie_title="oppenheimer"/>
      <Movie_Card movie_img_src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" movie_title="oppenheimer"/>
      <Movie_Card movie_img_src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" movie_title="oppenheimer"/>
      <Movie_Card movie_img_src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" movie_title="oppenheimer"/>
      <Movie_lists items={movies} />
      <Footer></Footer>

    </>
  );
}

export default App
