import React from 'react';
import styled from 'styled-components';
import Company from './Card-header';

const CardStyled = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 50px; 
    margin: 5%;

`;


function Card() {
  return (
    <CardStyled>
      <Company company="Photosnap" />
    </CardStyled>
    );
}

export default Card;