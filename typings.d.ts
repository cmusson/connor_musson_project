// types
export interface ICharacter {
  _id: string;
  death: string;
  birth: string;
  hair: string;
  realm: string;
  height: string;
  spouse: string;
  gender: string;
  name: string;
  race: string;
  wikiUrl: string;
}

export interface IMovie {
  name: string;
  runtimeInMinutes: string;
  budgetInMillions: string;
  boxOfficeRevenueInMillions: string;
  academyAwardNominations: string;
  academyAwardWins: string;
  rottenTomatoesScore: string;
}

export interface IQuote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}
