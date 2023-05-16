import { ICharacter } from "@/typings";
import Link from "next/link";

interface ICharacterProps {
  characters: ICharacter[];
}

const Characters = ({ characters }: ICharacterProps) => {
  return (
    <section className="flex flex-wrap gap-2">
      {characters.map((character, i) => (
        <Link href="/" key={`${character._id}-${i}`}>
          {`* ${character.name}`}
        </Link>
      ))}
    </section>
  );
};

export default Characters;
