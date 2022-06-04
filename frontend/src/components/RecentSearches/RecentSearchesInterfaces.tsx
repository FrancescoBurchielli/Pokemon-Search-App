import { SearchHistory } from "../../AppInterfaces";

export interface RecentSearchesProps {
    searchHistory:SearchHistory,
    searchPokemon:(name?: string, lastSearched?:string) => Promise<void>,
    setUserInput:React.Dispatch<React.SetStateAction<string>>,   
}