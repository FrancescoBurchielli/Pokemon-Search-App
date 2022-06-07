import styled from "styled-components";

export const RecentSearchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;

  #mainRecentSearches {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: center;
    align-items: center;

    #recentlySearchedHeader {
      font-style: italic;
      display: none;
    }

    .searchItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 0px 5px;
      .pokemonSprite {
        width: 40px;
        height: auto;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 100%;
        opacity: 0.3;
      }
      #pokeBall {
        opacity: 0.1;
      }
      #pokemonName {
        font-size: 12px;
        margin: 5px 5px 0px 5px;
        cursor: pointer;
        color: #aaaaaa;
      }
    }
    .searchItem:hover {
      #pokemonName {
        color: black;
      }
      .pokemonSprite {
        opacity: 1;
      }
      #pokeBall {
        opacity: 0.6;
      }
    }
    #searchItemClicked {
      #pokemonName {
        color: black;
      }
      .pokemonSprite {
        opacity: 1;
      }
      #pokeBall {
        opacity: 0.6;
      }
    }
  }
  @media only screen and (min-width: 667px) {
    padding: 0%;
    #mainRecentSearches {
      height: 100%;
      flex-direction: column;
      justify-content: center;

      #recentlySearchedHeader {
        font-style: italic;
        display: inline;
      }

      .searchItem {
        padding: 10px;
        .pokemonSprite {
          width: 60px;
          height: auto;
        }
      }
    }
  }
`;
