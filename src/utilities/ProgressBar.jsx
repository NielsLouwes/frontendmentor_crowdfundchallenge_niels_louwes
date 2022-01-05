import React from 'react';
import PropTypes from 'prop-types'; // ES6
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    progress[value] {
    width: 600px;
    height: 18px;
    -webkit-appearance: none;
   appearance: none;
    /* background-color: green; */
}
progress::-webkit-progress-value { 
    background: hsl(176, 50%, 47%); 
    border-radius: 20px;
    
    }
    progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}
`

const ProgressBar = ({value, max}) => {

    return (
        <Container>
            <progress value={value} max={max}/>
        </Container>
        

    )
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max:  PropTypes.number
}

ProgressBar.defaultProps = {
    color: "purple",
    width: "400px"
};

export default ProgressBar;
