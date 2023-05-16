import MovieInfo from "./MovieInfo";
import { fetchMovieInfo } from "./Api/fetchData";
import MovieCard from "./MovieCard";

export default async function Home() {
  const movieInfo = await fetchMovieInfo("5cd95395de30eff6ebccde56");

  return (
    <main className="flex min-h-screen flex-col items-center p-4 gap-2">
      <MovieInfo movieInfo={movieInfo} landingPage={true} />

      <section className="flex gap-6 flex-col tablet:flex-row">
        <MovieCard
          title={"Fellowship of the Ring"}
          img={"Fellowship"}
          width={225}
          height={350}
        />
        <MovieCard
          title={"The Two Towers"}
          img={"TwoTowers"}
          width={225}
          height={350}
        />
        <MovieCard
          title={"The Return of The King"}
          img={"ReturnOfTheKing"}
          width={225}
          height={350}
        />
      </section>
    </main>
  );
}
