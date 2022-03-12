import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    border: solid 1px lightgrey;
    width: 90%;
    height: 15vh;
    margin-top: 15px;
    margin-left: 20px;
    background-color: white;
    border-radius: 10px;
    padding: 15px;

    div {
        display: flex;
        justify-content: space-between;
    }

    button {
        border: none;
        border-radius: 30px;
        padding: 1rem 1.8rem;
        background-color: hsl(176, 50%, 47%);
        color: white;
        font-weight: bolder;
    }
    button:hover {
        cursor: pointer;
    }

    button:disabled {
        background-color: grey;
        cursor: none;
    }
    
    h3 {
        color: black;
    }

    span {
        font-size: 1.3em;
        font-weight: bolder;
        color: black;
    }

    .amount {
        font-size: 1.5em;
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
`
const Pledge = styled.p`
    color: hsl(176, 50%, 47%);
`


const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardTitle = styled.p`
    font-size: 1.1em;
    color: black;
    font-weight: bolder;
`
function StandCard({label, pledge, description, increment, amountLeft}) {

    return (
        <Styles>
                <TitleContainer>
                    <CardTitle>{label}</CardTitle>
                    <Pledge>{pledge}</Pledge>
                </TitleContainer>
                <p>{description}</p>
                <div>
                    <p> <span>{amountLeft}</span> left </p> 
                    <button 
                    className="hvr-grow"
                    disabled={
                        !amountLeft
                    }
                    onClick={increment} 
                    type="button"
                    >
                        Select Reward
                    </button>
                </div>
        </Styles>
    )
}

export default StandCard
