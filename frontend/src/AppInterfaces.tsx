export interface Pokemon {
    name:string,
    description:string,
    is_legendary:boolean;
  }

export interface SearchHistory {
  history: {name:string,timeOfSearch:number}[],
}