import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #3C402B;
  color: white;
  text-align: center;
  padding: 25px;
  margin-bottom: 10px;
  >a{
  color: white;
}
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Lauren Elizabeth Plemons</h1>
            <p>and</p>
            <h1>Patrick Gregory Little</h1>
            <p>Are getting married!!!</p>
            <h3>September 20, 2017</h3>
            <a href="/">Skip to RSVP</a>
        </HeaderContainer>
    );
};



export default Header;
