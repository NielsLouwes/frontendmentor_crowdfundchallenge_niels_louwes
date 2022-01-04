import React from 'react'
import styled from 'styled-components'
import bannerImage from '../images/image-hero-desktop.jpg'


const Styles = styled.div`
    nav {
        display: flex;
        justify-content: space-between;
        width: 98%;
        padding: 10px;
        height: 30vh;
    },
    h3 {
        color: white;
        font-size: 1.2em;
        margin-left: 25px;
    }
`

const MenuOptions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-right: 35px;
    
`

function Nav() {
    return (
        <Styles>
            <nav style={{ backgroundImage: `url(${bannerImage})`}}>        
                    <h3> crowdfund </h3>
                <MenuOptions>
                    <p>About</p>
                    <p>Discover</p>
                    <p>Get Started</p>
                </MenuOptions>
            </nav>

        </Styles>
    )
}

export default Nav
