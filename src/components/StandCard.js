import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    border: 1px solid red;
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
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;

`

function StandCard({label, pledge, description, amountLeft, onClick}) {


    return (
        <Styles>
                <TitleContainer>
                    <h3>{label}</h3>
                    <p>{pledge}</p>
                </TitleContainer>
                <p>{description}</p>
                <div>
                    <p>{amountLeft}</p>
                    <button onClick={onClick} type="button">Select Reward</button>
                </div>
        </Styles>
    )
}

export default StandCard
