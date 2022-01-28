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
  
  const [amountLeft, setAmountLeft] = useState({
     bamboo: 101,
     blackEdition: 64,
     mahogany: 0
  });

 const variantPledgeMapping = {
    bamboo: 25,
    blackEdition: 75,
    mahogany: 200
 }
// setBackers is a function that looks at previousBackersAmout and then adds 1
// setAmoutnLeft looks at previous, speads it into a new array, then looks at input variant and -1 of whichever variant is clicked on
  const backProductVariant = (variant) => {
    const variantPledge = variantPledgeMapping[variant]
    setMoneyPledged(previousMoneyPledged => previousMoneyPledged + variantPledge)
    setBackers(previousBackersAmount =>  previousBackersAmount + 1)
    setAmountLeft(previousAmountsLeft => ({
      ...previousAmountsLeft, 
      [variant]: previousAmountsLeft[variant] - 1,
    }))
  }

    return (
        <Styles>
          <Nav />
            <MainCardContainer>
                <TopCard moneyPledged={moneyPledged} />
                <MoneyCard moneyPledged={moneyPledged} backers={backers} />
                <ProjectCard 
                  moneyPledged={moneyPledged} 
                  backProductVariant={backProductVariant}
                  variantAmountLeft={amountLeft}
                  backers={backers}
                />
            </MainCardContainer>
        </Styles>
      
    )
}

export default Home
