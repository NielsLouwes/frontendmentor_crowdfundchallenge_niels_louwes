import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    border: 1px solid red;
    width: 45%;
    height: 20vh;
    background-color: white;
    border-radius: 10px;
    
    h2 {
        text-align: center;
    }
    p {
        text-align: center;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;

    button {
        border-radius: 30px;
        padding: 1rem;
        background-color: hsl(176, 50%, 47%);
        
    }
`

function MainCard() {
    return (
        <Styles>
            <h2>MasterCraft Bamboo Monitor Riser</h2>
             <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
             <ButtonContainer>
                 <button>Back this project</button>
                 <button>Bookmark</button>
             </ButtonContainer>
        </Styles>
    )
}

export default MainCard
