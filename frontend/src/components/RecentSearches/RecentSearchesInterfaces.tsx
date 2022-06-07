import {
  FetchErrorInterface,
  Pokemon,
  SearchHistory,
} from "../../AppInterfaces";

export interface RecentSearchesProps {
  searchHistory: SearchHistory;
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setFetchError: React.Dispatch<
    React.SetStateAction<FetchErrorInterface | undefined>
  >;
}
