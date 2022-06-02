import {FC} from 'react'
import styled from 'styled-components'
import { Pokemon } from '../../interfaces'

const ContentContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;    
    justify-content: center;   
    @media only screen and (min-width:667px) {
        width: 70%;
    }
`

const Content:FC<{pokemon:Pokemon}> = ({pokemon}) => {
  return (
    <ContentContainer>
        <h2>{pokemon.name}</h2>
        <p>{pokemon.description}</p>
    </ContentContainer>
  )
}

export default Content;