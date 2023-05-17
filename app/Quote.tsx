import { ICharacter, IQuote } from "@/typings";
import Link from "next/link";
import { fetchCharacters } from "./Api/fetchData";

interface IQuoteProps {
  quote: IQuote;
  character: boolean;
}

function findNameById(id: string, characters: ICharacter[]) {
  for (let i = 0; i < characters.length; i++) {
    if (characters[i]._id === id) {
      return characters[i].name;
    }
  }
  return null; // id not found
}

const Quote = async ({ quote, character }: IQuoteProps) => {
  const characters = await fetchCharacters();

  const dialog = quote ? `"${quote.dialog}"` : "";
  const link = quote ? `/character/${quote.character}` : "";

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 w-68 m-2">
        <p className="font-display text-xs">
          {`${dialog}${character ? "" : " - "}`}
          {character ? (
            <></>
          ) : (
            <Link
              href={link}
              className="hover:underline font-sans font-style: italic"
            >
              {findNameById(quote.character, characters)}
            </Link>
          )}
        </p>
      </div>
      <hr className="full" />
    </div>
  );
};

export default Quote as unknown as ({ quote }: IQuoteProps) => JSX.Element;
