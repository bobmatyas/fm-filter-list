import React from 'react';
import styled from 'styled-components'

const MainStyled = styled.main`
    background-color: hsl(180, 52%, 96%);
`;


function Main() {
  return (
    <MainStyled>
        <h1>This is a Font Test</h1>
    </MainStyled>
    );
}

export default Main;