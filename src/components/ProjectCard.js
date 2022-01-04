import React , {useState} from 'react'
import styled from 'styled-components'
import StandCard from './StandCard'

const Styles = styled.div`
    border: 1px solid red;
    max-width: 725px;
    margin-top: 15px;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
`

function ProjectCard(props) {
    
    return (
        <Styles>
                <h3>About this project</h3>
                <p> {props.moneyPledged}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur dui quis mauris placerat, at luctus nibh varius. Suspendisse sit amet quam scelerisque, gravida nunc eu, rutrum metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer rutrum ligula id erat congue varius. Quisque eu semper augue, sit amet tempor nulla. Fusce sed nisl molestie, euismod ligula non, vehicula eros. Cras egestas tellus vitae cursus ornare. Sed iaculis ante id mi gravida, eget tincidunt lacus auctor. Proin ante nunc, lobortis sit amet interdum ac, hendrerit sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                Fusce non turpis gravida, cursus justo vitae, accumsan magna. Praesent in vestibulum lorem, tristique sodales tellus. Donec vel nulla fringilla, placerat massa sit amet, malesuada sem. Aenean vulputate nulla ac ipsum blandit, a placerat libero facilisis. Nunc feugiat erat ipsum, vitae ullamcorper neque lobortis. 
                </p>
            <StandCard
                label="Bamboo Stand"
                pledge="Pledge $25 or more"
                description="You get an ergonomic stand made of natural bamboo."
                amountLeft="101 left"
            />
            <StandCard
                label="Black Edition Stand"
                pledge="Pledge $75 or more"
                description="You get a special edition Black computer stand and a personal thank you. Shipping included."
                amountLeft="64 left"
            />
            {/* needs to be greyed out as none are left in stock */}
            <StandCard
                label="Mahogany Special Edition"
                 pledge="Pledge $200 or more"
                description="You get to Special Edition Mahogany stand, a Backert t-shirt, and a personal thank you. Shipping included."
                amountLeft="0 left"            
            />
        </Styles>
    )
}

export default ProjectCard
