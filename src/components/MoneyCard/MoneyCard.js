import React  from 'react'
import styled from 'styled-components'
import ProgressBar from '../../utilities/ProgressBar'
import Divider from '@mui/material/Divider';


const Styles = styled.div`
    width: 47%;
    height: 15vh;
    margin-top: 15px;
    background-color: white;
    border-radius: 10px;
`

const FiguresContainer = styled.div`
    display: flex;
    justify-content: space-around;

    p {
      font-size: 1.0rem;
    }

    .bigFigure {
      font-size: 1.5rem;
      font-weight: bolder;
      color: black;
    }
`

function MoneyCard({moneyPledged, backers}) {
  
    return (
        <Styles>
            <FiguresContainer>
                <div>
                  <p className="bigFigure">${moneyPledged}.00</p>
                  <p> of $ 100,000 backed</p>
                </div>
                <Divider orientation="vertical" flexItem  variant="middle"/>
                <div>
                  <p className="bigFigure">{backers}</p>
                  <p> total backers</p>
                </div>
                <Divider orientation="vertical" flexItem  variant="middle"/>
                <div>
                  <p className="bigFigure">56</p>
                  <p> days left</p>
                </div>
                </FiguresContainer>
                <ProgressBar value={moneyPledged} max={100000}/>        
        </Styles>
    )
}

export default MoneyCard
