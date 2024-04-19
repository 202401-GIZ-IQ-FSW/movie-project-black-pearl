import Navbar from "@/components/NavbarComponents/Navbar";
import { fetchAndReturn } from "../api_headers";
import HanaMoviesContainer from "@/components/MoviesSectionComponents/HanaMoviesContainer";
import Footer from "@/components/FooterComponents/Footer";

async function Actors() {
  let actors = await fetchAndReturn(
    "https://api.themoviedb.org/3/trending/person/week?language=en-US"
  );

  return (
    <div>
      <Navbar isAbsolute={false} />
      <HanaMoviesContainer items={actors.results} isActor={true} />
      <Footer />
    </div>
  );
}

export default Actors;
