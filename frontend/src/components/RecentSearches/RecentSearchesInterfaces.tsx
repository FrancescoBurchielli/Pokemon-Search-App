import { SearchHistory } from "../../AppInterfaces";

export interface RecentSearchesProps {
    searchHistory:SearchHistory,
    searchPokemon:(name?: string,updateHistory?:boolean) => Promise<void>,
    setUserInput:React.Dispatch<React.SetStateAction<string>>,
}