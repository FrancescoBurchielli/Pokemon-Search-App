import {FC} from 'react'
import { ContentContainer } from './ContentStyled'
import { ContentProps } from './ContentInterfaces'
import PokeBall from "../../assets/poke_ball.png"



const Content:FC<ContentProps> = ({pokemon}) => {
  return (
    <ContentContainer>     
                    {pokemon.is_legendary?
                        <>  
                            <h1 id="legendaryStyle">{pokemon.name.toUpperCase()}</h1>
                            <h5 id="legendaryStyle">legendary</h5>
                        </>
                         
                    :   
                        <>
                            <h1>{pokemon.name.toUpperCase()}</h1>
                            <h5>non-legendary</h5>
                        </>
                    } 
                    {pokemon.sprite_url && <img id="sprite" src={pokemon.sprite_url}></img>}
                    {!pokemon.sprite_url &&  <img id="pokeBall" src={PokeBall}></img>}                   
                    <p>{pokemon.description.replace("\f"," ").replace("POKéMON","Pokémon")}</p>         
    </ContentContainer>
  )
}

export default Content;