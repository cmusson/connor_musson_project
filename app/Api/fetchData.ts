import { ICharacter, IMovie, IQuote } from "@/typings";

export const fetchQuotes = async (movieId: string) => {
  const LOTRAPI = process.env.NEXT_PUBLIC_LOTR_API_KEY;

  const res = await fetch(`https://the-one-api.dev/v2/movie/${movieId}/quote`, {
    headers: { Authorization: `Bearer ${LOTRAPI}` },
  });
  const quotesInfo = await res.json();
  let quotes: IQuote[] = quotesInfo.docs;
  if (quotesInfo.pages === 2) {
    const res = await fetch(
      `https://the-one-api.dev/v2/movie/${movieId}/quote?page=2`,
      {
        headers: { Authorization: `Bearer ${LOTRAPI}` },
      }
    );
    const additionalQuotes = await res.json();
    quotes.push(additionalQuotes);
  }

  return quotes;
};

export const fetchMovieInfo = async (movieId: string) => {
  const LOTRAPI = process.env.NEXT_PUBLIC_LOTR_API_KEY;

  const res = await fetch(`https://the-one-api.dev/v2/movie/${movieId}`, {
    headers: { Authorization: `Bearer ${LOTRAPI}` },
  });
  const movieInfoArray = await res.json();
  const movieInfo: IMovie = movieInfoArray.docs[0];

  return movieInfo;
};

export const fetchCharacter = async (characterId: string) => {
  const LOTRAPI = process.env.NEXT_PUBLIC_LOTR_API_KEY;

  const res = await fetch(
    `https://the-one-api.dev/v2/character/${characterId}`,
    {
      headers: { Authorization: `Bearer ${LOTRAPI}` },
    }
  );
  const charactersInfo = await res.json();
  const character: ICharacter = charactersInfo.docs[0];
  return character;
};

export const fetchCharacters = async () => {
  const LOTRAPI = process.env.NEXT_PUBLIC_LOTR_API_KEY;

  const res = await fetch(`https://the-one-api.dev/v2/character`, {
    headers: { Authorization: `Bearer ${LOTRAPI}` },
  });
  const charactersInfo = await res.json();
  const characters: ICharacter[] = charactersInfo.docs;

  return characters;
};

export const fetchCharacterQuotes = async (characterId: string) => {
  const LOTRAPI = process.env.NEXT_PUBLIC_LOTR_API_KEY;

  const res = await fetch(
    `https://the-one-api.dev/v2/character/${characterId}/quote`,
    {
      headers: { Authorization: `Bearer ${LOTRAPI}` },
    }
  );
  const charactersInfo = await res.json();
  const charactersQuotes: IQuote[] = charactersInfo.docs;

  return charactersQuotes;
};
