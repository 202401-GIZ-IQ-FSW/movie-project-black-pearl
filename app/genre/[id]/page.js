import { fetchAndReturn } from "@/app/api_headers";
import Footer from "@/components/FooterComponents/Footer";
import HanaMoviesContainer from "@/components/MoviesSectionComponents/HanaMoviesContainer";
import Navbar from "@/components/NavbarComponents/Navbar";

async function GenrePage({ params }) {
  let movies = await fetchAndReturn(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );

  movies = movies.results.filter((movie) =>
    movie.genre_ids.includes(Number.parseInt(params.id))
  );

  return (
    <div>
      <Navbar isAbsolute={false} />
      <HanaMoviesContainer title="" items={movies} />
      <Footer />
    </div>
  );
}
export default GenrePage;
