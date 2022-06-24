import { useState, useEffect } from "react";
import { AppContainer } from "./AppStyled";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import RecentSearches from "./components/RecentSearches/RecentSearches";
import Search from "./components/Search/Search";
import {
  Pokemon,
  SearchHistory,
  FetchErrorInterface,
  SearchItem,
} from "./AppInterfaces";
import Logo from "./assets/logo.png";
import {
  fetchPokemonAndSetState,
  inputFormatter,
  retrieveSearchHistory,
  updateSearchHistoryHelper,
} from "./helpers/helpers";
import { Loading } from "./components/Loading/Loading";
import { FetchError } from "./components/FetchError/FetchError";

const App = () => {
  const [searchHistory, setSearchHistory] = useState<
    SearchHistory | undefined
  >();
  const [userInput, setUserInput] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<
    FetchErrorInterface | undefined
  >();
  const [clickedSearchItem, setClickedSearchItem] = useState<
    SearchItem | undefined
  >();

  useEffect(() => {
    retrieveSearchHistory(setSearchHistory);
  }, []);

  const updateSearchHistory = (searchedPokemon: Pokemon) => {
    updateSearchHistoryHelper(searchedPokemon, searchHistory, setSearchHistory);
  };

  const searchPokemon = () => {
    const formattedInput = inputFormatter(userInput);
    if (!formattedInput) {
      return;
    }
    setClickedSearchItem(undefined);
    setPokemon(undefined);
    setFetchError(undefined);
    if (searchHistory) {
      const searchedPokemon = searchHistory.history.filter(
        (searchItem) => searchItem.pokemon.name === formattedInput
      )[0];
      if (searchedPokemon) {
        setPokemon(searchedPokemon.pokemon);
        setClickedSearchItem(searchedPokemon);
        return;
      }
    }
    fetchPokemonAndSetState(
      formattedInput,
      setLoading,
      setPokemon,
      setFetchError,
      updateSearchHistory
    );
  };

  const onSubmitSearchPokemon = () => {
    searchPokemon();
  };

  const onSearchItemClickHandler = (searchItem: SearchItem): void => {
    setFetchError(undefined);
    setClickedSearchItem(searchItem);
    setPokemon(searchItem.pokemon);
    setUserInput(searchItem.pokemon.name);
  };

  return (
    <AppContainer>
      {searchHistory && (
        <RecentSearches
          searchHistory={searchHistory}
          onSearchItemClickHandler={onSearchItemClickHandler}
          clickedSearchItem={clickedSearchItem}
          setClickedSearchItem={setClickedSearchItem}
        />
      )}
      <div id="mainApp">
        <img id="logo" alt="logo" src={Logo}></img>
        <Search
          userInput={userInput}
          setUserInput={setUserInput}
          onSubmitSearchPokemon={onSubmitSearchPokemon}
        />
        {loading && <Loading />}
        {fetchError && <FetchError error={fetchError} />}
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </div>
    </AppContainer>
  );
};

export default App;
