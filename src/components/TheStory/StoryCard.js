import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Outer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items:center
     margin: 0 auto;
     padding: 20px 0;
     font-family: "Nixie One";
     
`

const Name = styled.div`
    text-align: center;
`

const Description = styled.div`
    width: 70%;
    line-height: 1.7em;
    padding-left:40px 
`

const StoryCard = (props) => {
    return (
        <Outer>
            <Name><p>{props.name}</p></Name>
            <Description>{props.description}</Description>
        </Outer>
    );
};

StoryCard.propTypes = {};
StoryCard.defaultProps = {};

export default StoryCard;
