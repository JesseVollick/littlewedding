import React from 'react';
import styled from 'styled-components';

const Dates = styled.div`
     padding:  0 10px;
     margin: 0 auto;
     font-family: "Nixie One";
`

const Date = (props) => <Dates><h3>{props.date}</h3></Dates>;



export default Date;
