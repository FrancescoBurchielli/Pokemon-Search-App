import { Pokemon,SearchHistory } from "../../AppInterfaces";

export interface SearchProps {
    userInput: string,
    setUserInput: React.Dispatch<React.SetStateAction<string>>,
    searchPokemon: (name?: string) => Promise<void>,
}