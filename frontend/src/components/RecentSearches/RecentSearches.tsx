import { FC, useState, useEffect } from "react";
import { SearchItem } from "../../AppInterfaces";
import { RecentSearchesProps } from "./RecentSearchesInterfaces";
import { RecentSearchesContainer } from "./RecentSearchesStyled";
import PokeBall from "../../assets/poke_ball.png";

const RecentSearches: FC<RecentSearchesProps> = ({
  searchHistory,
  setUserInput,
  setPokemon,
  setFetchError,
}) => {
  const [clickedSearchItem, setClickedSearchItem] = useState<
    SearchItem | undefined
  >();

  useEffect(() => {
    return () => {
      setClickedSearchItem(undefined);
    };
  }, [searchHistory]);

  const checkEqualitySearchItem = (
    searchItem1: SearchItem,
    searchItem2: SearchItem
  ) => {
    return (
      searchItem1.pokemon.name === searchItem2.pokemon.name &&
      searchItem1.timeOfSearch === searchItem2.timeOfSearch
    );
  };

  const recentSearchClickHandler = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    searchItem: SearchItem
  ) => {
    setFetchError(undefined);
    setPokemon(searchItem.pokemon);
    setUserInput(searchItem.pokemon.name);
    setClickedSearchItem(searchItem);
  };

  return (
    <RecentSearchesContainer>
      <div id="mainRecentSearches">
        <h4 id="recentlySearchedHeader">Recent searches</h4>
        {searchHistory.history
          .sort((a, b) => b.timeOfSearch - a.timeOfSearch)
          .map((searchItem) => {
            return (
              <div
                className={"searchItem"}
                id={
                  clickedSearchItem &&
                  checkEqualitySearchItem(searchItem, clickedSearchItem)
                    ? "searchItemClicked"
                    : ""
                }
                key={searchItem.timeOfSearch}
                onClick={(e) => {
                  recentSearchClickHandler(e, searchItem);
                }}
              >
                <img
                  className="pokemonSprite"
                  id={searchItem.pokemon.spriteUrl === "" ? "pokeBall" : ""}
                  src={
                    searchItem.pokemon.spriteUrl !== ""
                      ? searchItem.pokemon.spriteUrl
                      : PokeBall
                  }
                ></img>
                <p id="pokemonName">{searchItem.pokemon.name}</p>
              </div>
            );
          })}
      </div>
    </RecentSearchesContainer>
  );
};

export default RecentSearches;
