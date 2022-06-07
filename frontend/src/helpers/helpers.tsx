import { Pokemon, SearchHistory } from "../AppInterfaces";

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
