import React from 'react'
import styled from 'styled-components'


const Styles = styled.div`
    width: 47%;
    height: 17vh;
    background-color: white;
    border-radius: 10px;
    
    
    h2 {
        text-align: center;
        color: black;
    }
    p {
        text-align: center;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    button {
        border-radius: 30px;
        padding: 1rem 2.5rem;
        background-color: hsl(176, 50%, 47%);
        color: white;
        font-weight: bolder;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    .hvr-grow {
    display: inline-block;s
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}
`;

function MainCard({moneyPledged}) {
    return (
        <Styles>
            <h2>MasterCraft Bamboo Monitor Riser</h2>
             <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
             <ButtonContainer>
                 <button className="hvr-grow">Back this project</button>
                 <button className="hvr-grow">Bookmark</button>
             </ButtonContainer>
             
        </Styles>
    )
}

export default MainCard
