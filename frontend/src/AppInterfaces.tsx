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


export interface SearchItem {
  pokemon: Pokemon,
  timeOfSearch: number,
}

export interface SearchHistory {
  history: SearchItem[];
}
