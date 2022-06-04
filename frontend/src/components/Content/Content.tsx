import {FC} from 'react'
import { ContentContainer } from './ContentStyled'
import { ContentProps } from './ContentInterfaces'



const Content:FC<ContentProps> = ({pokemon}) => {
  return (
    <ContentContainer>     
                    {pokemon.is_legendary?
                        <>  
                            <h2 id="legendaryStyle">{pokemon.name.toUpperCase()}</h2>
                            <h4 id="legendaryStyle">legendary</h4>
                        </>
                         
                    :   
                        <>
                            <h2>{pokemon.name.toUpperCase()}</h2>
                            <h4>non-legendary</h4>
                        </>
                    }                    
                    <p>{pokemon.description.replace("\f"," ").replace("POKéMON","Pokémon")}</p>         
    </ContentContainer>
  )
}

export default Content;