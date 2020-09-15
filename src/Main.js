import React from 'react';
import styled from 'styled-components'
import Card from './Card';

const MainStyled = styled.main`
    background-color: hsl(180, 52%, 96%);
`;


function Main() {
  return (
    <MainStyled>
        <Card />
    </MainStyled>
    );
}

export default Main;