import React from 'react';
import styled from 'styled-components';
import MobileBg from './images/bg-header-mobile.svg';
import DesktopBg from './images/bg-header-desktop.svg';

const HeaderStyled = styled.header`
    background-color: hsl(180, 29%, 50%);
    background-image: url(${MobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 155px;
    margin: 0;
    padding: 0;

    @media (min-width: 600px) {
      background-image: url(${DesktopBg});
    }
`;


function Header() {
  return (
    <HeaderStyled />
    );
}

export default Header;