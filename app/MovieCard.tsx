import Link from "next/link";
import Button from "./Button";
import MoviePoster from "./MoviePoster";

interface IMovieCardProps {
  title: string;
  img: string;
  width: number;
  height: number;
}

const MovieCard = ({ title, img, width, height }: IMovieCardProps) => {
  return (
    <div className="flex align-center flex-col gap-4">
      <Button>
        <Link href={`movie/${img}`}>{title}</Link>
      </Button>
      <Link href={`movie/${img}`} className="flex justify-center ">
        <MoviePoster width={width} height={height} movie={img} />
      </Link>
    </div>
  );
};

export default MovieCard;
