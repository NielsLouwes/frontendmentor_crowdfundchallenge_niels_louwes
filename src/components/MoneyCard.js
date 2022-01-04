import React , {useState} from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    border: 1px solid red;
    width: 45%;
    height: 15vh;
    margin-top: 15px;
    background-color: white;
    border-radius: 10px;
`

const FiguresContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

function MoneyCard(props) {
 

    return (
        <Styles>
            <FiguresContainer>
                <div>
                  <p>$ {props.moneyPledged}.00</p>
                  <p> of $ 100,000 backed</p>
                </div>
                <div>
                  <p>{props.backers}</p>
                  <p> total backers</p>
                </div>
                <div>
                  <p>56</p>
                  <p> days left</p>
                </div>
            </FiguresContainer>
        </Styles>
    )
}

export default MoneyCard
