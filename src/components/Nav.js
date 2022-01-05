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
    },
    h3 {
        color: white;
        font-size: 1.2em;
        margin-left: 25px;
    }

    p {
        cursor: pointer;
        font-weight: bolder;
        margin-left: 15px;
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
                    <p className="hvr-grow">About</p>
                    <p className="hvr-grow">Discover</p>
                    <p className="hvr-grow">Get Started</p>
                </MenuOptions>
            </nav>

        </Styles>
    )
}

export default Nav
