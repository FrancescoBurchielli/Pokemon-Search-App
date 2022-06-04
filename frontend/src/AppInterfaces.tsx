export interface Pokemon {
    name:string,
    description:string,
    is_legendary:boolean;
    sprite_url:string,
  }

export interface SearchHistory {
  history: {name:string,timeOfSearch:number}[],
}