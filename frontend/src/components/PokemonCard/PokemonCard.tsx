import { FC, useState } from "react";
import { PokemonCardContainer } from "./PokemonCardStyled";
import { PokemonCardProps } from "./PokemonCardInterfaces";
import PokeBall from "../../assets/poke_ball.png";

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const [spriteLoaded, setSpriteLoaded] = useState<boolean>(false);

  return (
    <PokemonCardContainer spriteLoaded={spriteLoaded}>
      {pokemon.isLegendary ? (
        <>
          <h1 id="legendaryStyle">{pokemon.name.toUpperCase()}</h1>
          <h3 id="legendaryStyle">legendary!</h3>
        </>
      ) : (
        <>
          <h1>{pokemon.name.toUpperCase()}</h1>
          <h3>non-legendary</h3>
        </>
      )}
      {
        <img
          id={pokemon.spriteUrl ? "sprite" : "pokeBall"}
          src={pokemon.spriteUrl ? pokemon.spriteUrl : PokeBall}
          onLoad={() => setSpriteLoaded(true)}
        />
      }
      <p>
        {pokemon.description.replace("\f", " ").replace("POKéMON", "Pokémon")}
      </p>
    </PokemonCardContainer>
  );
};
