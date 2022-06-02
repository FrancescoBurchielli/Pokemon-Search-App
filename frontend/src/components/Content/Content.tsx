import {FC} from 'react'
import { ContentContainer } from './ContentStyled'
import { ContentProps } from './ContentInterfaces'



const Content:FC<ContentProps> = ({pokemon}) => {
  return (
    <ContentContainer>     
                    {pokemon.is_legendary? 
                        <h2 id="legendaryStyle">{pokemon.name.toUpperCase()} - legendary!</h2>
                    :
                        <h2>{pokemon.name}</h2>
                    }                    
                    <p>{pokemon.description}</p>         
    </ContentContainer>
  )
}

export default Content;