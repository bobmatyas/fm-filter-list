import React from 'react';
import styled from 'styled-components';
import MobileBg from './images/bg-header-mobile.svg';

const HeaderStyled = styled.header`
    background-color: hsl(180, 8%, 52%);
    background-image: url(${MobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 155px;
    margin: 0;
    padding: 0;
`;


function Header() {
  return (
    <HeaderStyled />
    );
}

export default Header;