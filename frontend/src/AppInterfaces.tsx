export interface Pokemon {
  name: string;
  description: string;
  isLegendary: boolean;
  spriteUrl: string;
}

export interface FetchErrorInterface{
  status: number,
  message: string,
}


export interface SearchHistory {
  history: { pokemon: Pokemon; timeOfSearch: number }[];
}
