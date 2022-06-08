import { FetchErrorInterface, Pokemon, SearchHistory } from "../AppInterfaces";
import { fetchPokemon } from "../axios/fetches";

interface FetchPokemonAndSetStateFunction {
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

export const fetchPokemonAndSetState: FetchPokemonAndSetStateFunction = (
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

export const retrieveSearchHistory = (
  setSearchHistory: React.Dispatch<
    React.SetStateAction<SearchHistory | undefined>
  >
) => {
  const retrievedHistory = localStorage.getItem("searchHistory");
  if (retrievedHistory) {
    setSearchHistory(JSON.parse(retrievedHistory));
  }
};

export const updateSearchHistoryHelper = (
  pokemon: Pokemon,
  searchHistoryObject: SearchHistory | undefined,
  setSearchHistory: React.Dispatch<
    React.SetStateAction<SearchHistory | undefined>
  >
) => {
  const newSearchItem = {
    pokemon: pokemon,
    timeOfSearch: new Date().getTime(),
  };
  let newSearchHistoryObject;
  if (searchHistoryObject) {
    searchHistoryObject.history.sort((a, b) => b.timeOfSearch - a.timeOfSearch);
    if (searchHistoryObject.history.length > 4) {
      searchHistoryObject.history.pop();
    }
    const history = [...searchHistoryObject.history, newSearchItem];
    newSearchHistoryObject = { ...searchHistoryObject, history };
  } else {
    const history = [newSearchItem];
    newSearchHistoryObject = { history: history };
  }
  localStorage.setItem("searchHistory", JSON.stringify(newSearchHistoryObject));
  setSearchHistory(newSearchHistoryObject);
};

export const inputFormatter = (name: string) => {
  const formattedInput = name.trim().toLowerCase().replace(" ", "-");
  return formattedInput;
};
