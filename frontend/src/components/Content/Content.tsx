import {FC} from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;    
    justify-content: center;   
    @media only screen and (min-width:667px) {
        width: 70%;
    }
`



const Content:FC<{name:string,description:string}> = ({name,description}) => {
  return (
    <ContentContainer>
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </ContentContainer>
  )
}

export default Content;