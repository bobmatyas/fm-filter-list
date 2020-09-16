import React from 'react';
import styled from 'styled-components';
import Company from './Card-header';
import Title from './Card-title';
import Details from './Card-details';
import Technologies from './Card-technologies';

const CardStyled = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 25px; 
    margin: 5%;

`;


function Card() {
  return (
    <CardStyled>
      <Company company="Photosnap" />
      <Title title="Senior Frontend Developer" />
      <Details />
      <Technologies />
    </CardStyled>
    );
}

export default Card;