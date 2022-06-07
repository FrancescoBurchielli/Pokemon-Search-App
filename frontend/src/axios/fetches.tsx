import { AxiosResponse } from "axios";
import { Pokemon, FetchErrorInterface } from "../AppInterfaces";
import axiosInstance from "./index";

interface FetchPokemonFunction {
  (
    name: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>,
    setError: React.Dispatch<
      React.SetStateAction<FetchErrorInterface | undefined>
    >,
    updateSearchHistory: (searchedPokemon: Pokemon) => void
  ): void;
}

const fetchPokemon = async (name: string): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(name + "/");
  return response;
};

export const fetchPokemonAndSetState: FetchPokemonFunction = (
  name,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPokemon,
  setError,
  updateSearchHistory
) => {
  setLoading(true);
  fetchPokemon(name)
    .then((response) => {
      updateSearchHistory(response.data);
      setPokemon(response.data);
    })
    .catch((error) => {
      let errorObject: FetchErrorInterface;
      if (error.response && error.response.status === 404) {
        errorObject = {
          status: error.response.status,
          message: "we couldn't find your pokemon, sorry...",
        };
      } else {
        errorObject = {
          status: 500,
          message: "something went wrong, please try again later...",
        };
      }
      setError(errorObject);
    })
    .finally(() => {
      setLoading(false);
    });
};
