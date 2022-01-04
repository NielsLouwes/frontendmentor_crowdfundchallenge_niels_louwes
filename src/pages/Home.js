import React, {useState} from 'react'
import TopCard from '../components/TopCard'
import Nav from '../components/Nav'
import MoneyCard from '../components/MoneyCard'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard'

const Styles = styled.div`
  background-color: lightgrey;
  height: 100vh;
`

const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

`
function Home() {
  const [moneyPledged, setMoneyPledged] = useState(250);
  const [backers, setBackers] = useState(25);
  const [days, setDays] = useState(56);
  const increment25 = () => {
    setMoneyPledged(moneyPledged + 25)
  }
  const increment75 = () => {
    setMoneyPledged(moneyPledged + 75)
  }
  const increment200 = () => {
    setMoneyPledged(moneyPledged + 200)
  }

    return (
        <Styles>
          <Nav />
            <MainCardContainer>
                <TopCard />
                <MoneyCard moneyPledged={moneyPledged} />
                <ProjectCard moneyPledged={moneyPledged} onClick={increment25}/>
            </MainCardContainer>
        </Styles>
    )
}

export default Home
