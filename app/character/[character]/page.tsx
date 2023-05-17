import { fetchCharacter, fetchCharacterQuotes } from "@/app/Api/fetchData";
import QuoteList from "@/app/QuoteList";
import Link from "next/link";

type PageProps = {
  params: {
    character: string;
  };
};

const infoCheck = (category: string) => {
  if (category === "") {
    return "unknown";
  } else return category;
};

const CharacterPage = async ({ params: { character } }: PageProps) => {
  const characterInfo = await fetchCharacter(character);
  const characterQuotes = await fetchCharacterQuotes(character);
  const link = characterInfo.wikiUrl;

  return (
    <main className="p-4 gap-2">
      <section className="flex flex-col align-center gap-2">
        <h1 className="text-xl text-center font-display">
          {<div>{infoCheck(characterInfo.name)}</div>}
        </h1>
        <div className="flex gap-2 justify-center">
          <div className="bg-info-gry p-2 rounded-lg w-80">
            {<p>{`Race: ${infoCheck(characterInfo.race)}`}</p>}
            {<p>{`Birth: ${infoCheck(characterInfo.birth)}`}</p>}
            {<p>{`Death: ${infoCheck(characterInfo.death)}`}</p>}
            {<p>{`Realm: ${infoCheck(characterInfo.realm)}`}</p>}
          </div>
          <div className="bg-info-gry p-2 rounded-lg w-80">
            {<p>{`Spouse: ${infoCheck(characterInfo.spouse)}`}</p>}
            {<p>{`Height: ${infoCheck(characterInfo.height)}`}</p>}
            {<p>{`Hair: ${infoCheck(characterInfo.hair)}`}</p>}
            {<p>{`Gender: ${infoCheck(characterInfo.gender)}`}</p>}
          </div>
        </div>
        {
          <Link href={link} target="_blank">
            <h3 className="text-center hover:underline">{infoCheck(link)}</h3>
          </Link>
        }
      </section>
      <h2 className="text-lg">{`Famous Quotes from ${characterInfo.name}:`}</h2>
      <QuoteList quotes={characterQuotes} page="character" />
    </main>
  );
};

export default CharacterPage;
