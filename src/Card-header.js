import React from 'react';
import styled from 'styled-components';

const CompanyStyled = styled.h2`
    background-color: #fff;
    border-radius: 5px;
    padding: 50px; 
    margin: 5%;

`;


function Company(props) {
  return (
    <CompanyStyled>
        {props.company}
    </CompanyStyled>
    );
}

export default Company;