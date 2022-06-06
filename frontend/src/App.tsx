import {useState, useEffect } from "react";
import { AppContainer } from "./AppStyled";
import {PokemonCard} from "./components/PokemonCard/PokemonCard";
import RecentSearches from "./components/RecentSearches/RecentSearches";
import Search from "./components/Search/Search";
import { Pokemon, SearchHistory, FetchErrorInterface } from "./AppInterfaces";
import { fetchPokemon } from "./axios/fetches";
import Logo from "./assets/logo.png";
import {
  nameFormatter,
  retrieveSearchHistory,
  updateSearchHistory,
} from "./helpers/helpers";
import { Loading } from "./components/Loading/Loading";
import { FetchError } from "./components/FetchError/FetchError";

const App = () => {
  const [searchHistory, setSearchHistory] = useState<SearchHistory>({
    history: [],
  });
  const [userInput, setUserInput] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<FetchErrorInterface | undefined>();

  useEffect(() => {
    retrieveSearchHistory(setSearchHistory);
  }, []);

  const searchPokemon = async (name = userInput) => {
    const formattedName = nameFormatter(name);
    if (!formattedName) {
      return;
    }
    setPokemon(undefined);
    setFetchError(undefined);
    fetchPokemon(name, setLoading, setPokemon, setFetchError);
  };

  return (
    <AppContainer>
      <RecentSearches
        searchHistory={searchHistory}
        searchPokemon={searchPokemon}
        setUserInput={setUserInput}
      />
      <div id="mainApp">
        <img id="logo" alt="logo" src={Logo}></img>
        <Search
          userInput={userInput}
          setUserInput={setUserInput}
          searchPokemon={searchPokemon}
        />
        {loading && <Loading/>}
        {fetchError && <FetchError error={fetchError}/>}  
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </div>
    </AppContainer>
  );
};

export default App;
