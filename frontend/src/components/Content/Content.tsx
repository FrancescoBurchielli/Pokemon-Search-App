import {FC,useState} from 'react'
import { ContentContainer } from './ContentStyled'
import { ContentProps } from './ContentInterfaces'
import PokeBall from "../../assets/poke_ball.png"



const Content:FC<ContentProps> = ({pokemon}) => {
       
    const [spriteLoaded,setSpriteLoaded] = useState<boolean>(false);

    return (
        <ContentContainer spriteLoaded>     
                    {pokemon.isLegendary?
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
                     {pokemon.spriteUrl && <img id="sprite" src={pokemon.spriteUrl} onLoad={()=>setSpriteLoaded(true)}></img>}
                    {!pokemon.spriteUrl &&  <img id="pokeBall" src={PokeBall} onLoad={()=>setSpriteLoaded(true)}></img>}                                        
                    <p>{pokemon.description.replace("\f"," ").replace("POKéMON","Pokémon")}</p>         
        </ContentContainer>
  )
}

export default Content;