import MovieInfo from "@/app/MovieInfo";
import MoviePoster from "@/app/MoviePoster";
import { fetchMovieInfo, fetchQuotes } from "@/app/Api/fetchData";
import QuoteList from "@/app/QuoteList";

type PageProps = {
  params: {
    movie: string;
  };
};

const MoviePage = async ({ params: { movie } }: PageProps) => {
  const movieId = movie === "Fellowship" ? "c" : "TwoTowers" ? "b" : "d";
  const quotes = await fetchQuotes(`5cd95395de30eff6ebccde5${movieId}`);
  const movieInfo = await fetchMovieInfo(`5cd95395de30eff6ebccde5${movieId}`);

  return (
    <main className="p-4 gap-2">
      <section className="flex gap-4 ">
        <MoviePoster width={160} height={240} movie={movie} />
        <MovieInfo movieInfo={movieInfo} moviePage={true} />
      </section>
      <section className="h-70 overflow-y-auto">
        <h2 className="text-base tablet:text-lg">Famous movie quotes</h2>
        <h3 className="text-xs tablet:text-sm">
          {`(Select a character to see more information and quotes)`}
        </h3>
        <QuoteList quotes={quotes} page="movie" />
      </section>
    </main>
  );
};

export default MoviePage;
