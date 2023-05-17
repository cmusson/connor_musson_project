import { IMovie } from "@/typings";

interface IMovieInfoProps {
  movieInfo: IMovie;
  landingPage?: boolean;
  moviePage?: boolean;
}

const MovieInfo = ({ movieInfo, landingPage, moviePage }: IMovieInfoProps) => {
  return (
    <section className="flex flex-col align-center">
      <h1
        className={`${
          moviePage ? "text-left" : "text-center"
        } text-md tabley:text-xl font-display`}
      >
        {movieInfo.name}
      </h1>
      {landingPage ? (
        <h2 className="text-center text-sm pb-1 ">
          Find all the information below
        </h2>
      ) : (
        <></>
      )}
      <div
        className={`flex ${
          moviePage ? "flex-col" : "flex-row"
        } gap-2 justify-center`}
      >
        <div className="bg-info-gry p-2 rounded-lg w-42 tablet:w-72 text-xs tablet:text-base">
          <p>{`Runtime - ${movieInfo.runtimeInMinutes} mins`}</p>
          <p>{`Budget - $${movieInfo.budgetInMillions}m`}</p>
          <p>{`Box Office Revenue - $${movieInfo.boxOfficeRevenueInMillions}m`}</p>
        </div>
        <div className="bg-info-gry p-2 rounded-lg w-42 tablet:w-72 text-xs tablet:text-base">
          <p>{`Academy Award Nominations - ${movieInfo.academyAwardNominations}`}</p>
          <p>{`Academy Award Wins - ${movieInfo.academyAwardWins}`}</p>
          <p>{`Rotten Tomatoes Score - ${movieInfo.rottenTomatoesScore}%`}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
