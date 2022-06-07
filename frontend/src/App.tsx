import { useState, useEffect } from "react";
import { AppContainer } from "./AppStyled";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import RecentSearches from "./components/RecentSearches/RecentSearches";
import Search from "./components/Search/Search";
import { Pokemon, SearchHistory, FetchErrorInterface } from "./AppInterfaces";
import { fetchPokemonAndSetState } from "./axios/fetches";
import Logo from "./assets/logo.png";
import {
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

  useEffect(() => {
    retrieveSearchHistory(setSearchHistory);
  }, []);

  const updateSearchHistory = (searchedPokemon: Pokemon) => {
    updateSearchHistoryHelper(searchedPokemon, searchHistory, setSearchHistory);
  };

  const searchPokemon = async () => {
    const formattedInput = inputFormatter(userInput);
    if (!formattedInput) {
      return;
    }
    setPokemon(undefined);
    setFetchError(undefined);
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

  return (
    <AppContainer>
      {searchHistory && (
        <RecentSearches
          searchHistory={searchHistory}
          setPokemon={setPokemon}
          setUserInput={setUserInput}
          setFetchError={setFetchError}
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
