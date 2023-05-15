import Button from "./Button";
import MovieInfo from "./MovieInfo";
import QuoteList from "./QuoteList";

const fetchMovieInfo = async () => {};

export default async function Home() {
  const movieInfo = await fetchMovieInfo();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="flex">
        <Button>Fellowship of the Ring</Button>
        <Button>Twin Towers</Button>
        <Button>Return of the King</Button>
      </section>
      <section>
        <MovieInfo />
      </section>
      <section>
        <QuoteList />
      </section>
    </main>
  );
}
