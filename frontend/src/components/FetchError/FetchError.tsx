import { FC } from "react";
import { FetchErrorInterface } from "../../AppInterfaces";
import NotFound from "../../assets/sadPokemon.png";
import { FetchErrorContainer } from "./FetchErrorStyled";

export const FetchError: FC<{ error: FetchErrorInterface }> = ({ error }) => {
  return (
    <FetchErrorContainer>
      <div id="pokemonNotFound">
        <img alt="notFound" id="notFound" src={NotFound}></img>
        <p>{error.message}</p>
      </div>
    </FetchErrorContainer>
  );
};
