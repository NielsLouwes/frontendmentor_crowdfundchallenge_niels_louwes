import React, {useState} from 'react'
import TopCard from '../components/TopCard'
import Nav from '../components/Nav'
import MoneyCard from '../components/MoneyCard'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard'


const Styles = styled.div`
  background-color: hsl(45, 29%, 97%);
`

const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

`
function Home() {
  const [moneyPledged, setMoneyPledged] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [days, setDays] = useState(56);
  const [bambooAmountLeft, setBambooAmountLeft] = useState(101);
  const [blackEditionAmountLeft, setBlackEditionAmountLeft] = useState(64);
  const [mahoganyAmountLeft, setMahoganyAmountLeft] = useState(0);

  const increment25 = () => {
    setMoneyPledged(moneyPledged + 25)
    setBackers(backers + 1)
    setBambooAmountLeft(bambooAmountLeft - 1)
  }
  const increment75 = () => {
    setMoneyPledged(moneyPledged + 75)
    setBackers(backers + 1)
    setBlackEditionAmountLeft(blackEditionAmountLeft - 1)
  }
  const increment200 = () => {
    setMoneyPledged(moneyPledged + 200)
    setBackers(backers + 1)
    if (mahoganyAmountLeft === 0) {
      return console.log("These are all sold out!");
    } else {
      setMahoganyAmountLeft(mahoganyAmountLeft - 1)
    }
  }

    return (
        <Styles>
          <Nav />
            <MainCardContainer>
                <TopCard moneyPledged={moneyPledged} />
                <MoneyCard moneyPledged={moneyPledged} backers={backers} />
                <ProjectCard 
                  moneyPledged={moneyPledged} 
                  increment25={increment25}
                  increment75={increment75}
                  increment200={increment200}
                  bambooAmountLeft={bambooAmountLeft}
                  blackEditionAmountLeft={blackEditionAmountLeft}
                  mahoganyAmountLeft={mahoganyAmountLeft}
                />
            </MainCardContainer>
        </Styles>
      
    )
}

export default Home
