import { Pokemon } from "../../AppInterfaces";

export interface SearchProps {
    setPokemon:React.Dispatch<React.SetStateAction<Pokemon | undefined>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorNotFound: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorOther: React.Dispatch<React.SetStateAction<boolean>>,    

}