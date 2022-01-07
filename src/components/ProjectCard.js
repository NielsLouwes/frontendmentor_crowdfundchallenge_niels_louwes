import React  from 'react'
import styled from 'styled-components'
import StandCard from './StandCard'

const Styles = styled.div`
    width: 45%;
    margin-top: 15px;
    background-color: white;
    border-radius: 10px;
    padding: 15px;

    h3 {
        color: black;
        font-weight: bolder;
        font-size: 1.5rem;
        margin-left: 25px;
    }

    p {
        margin-bottom: 15px;
    }
`

const TextContainer = styled.div`
    width: 90%;
    margin-left: 25px;
    text-align: justify;
`

function ProjectCard({moneyPledged, backers, increment25, increment75, increment200, bambooAmountLeft, blackEditionAmountLeft, mahoganyAmountLeft}) {
    
    return (
        <Styles>
                <h3>About this project</h3>
                <TextContainer>
                    <p>
                        The Mastercraft Bamboo Monitor is a sturdy and stylish platform that elevates your screen to a more comfotable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                    </p>
                    <p>
                        Featuring artisan craftstmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                    </p>
                </TextContainer>
            <StandCard
                label="Bamboo Stand"
                pledge="Pledge $25 or more"
                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotial campaign, and you'll be added to a special Backer member list."
                amountLeft={bambooAmountLeft}
                moneyPledged={moneyPledged} 
                increment={increment25}
                backers={backers}
            />
            <StandCard
                label="Black Edition Stand"
                pledge="Pledge $75 or more"
                description="You get a special edition Black computer stand and a personal thank you. You'll be added to a special Backer member list.Shipping included."
                amountLeft={blackEditionAmountLeft}
                moneyPledged={moneyPledged} 
                increment={increment75}
                backers={backers}
            />
            {/* needs to be greyed out as none are left in stock */}
            <StandCard
                label="Mahogany Special Edition"
                 pledge="Pledge $200 or more"
                description="You get to Special Edition Mahogany stand, a Backer t-shirt, and a personal thank you. You'll be added to a special Backer member list. Shipping included."
                amountLeft={mahoganyAmountLeft}  
                moneyPledged={moneyPledged} 
                increment={increment200}
                backers={backers}s
            />
        </Styles>
    )
}

export default ProjectCard
