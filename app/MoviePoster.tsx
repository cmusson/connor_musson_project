import Image from "next/image";

interface IMoviePosterProps {
  height: number;
  width: number;
  movie: string;
}

const MoviePoster = ({ height, width, movie }: IMoviePosterProps) => {
  return (
    <Image
      src={`/${movie}Poster.jpg`}
      alt="movie poster"
      height={height}
      width={width}
    />
  );
};

export default MoviePoster;
