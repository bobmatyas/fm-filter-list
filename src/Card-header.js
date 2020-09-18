import React from 'react';
import styled from 'styled-components';
import Highlights from './Card-header-highlights';

const CompanyHeader = styled.div`
    align-items: center;
    display: flex;
`;

const CompanyStyled = styled.h2`
    color: hsl(180, 29%, 50%);
    font-size: 12px;
    margin: 0;
`;


function Company(props) {
  return (
    <CompanyHeader>
        <CompanyStyled>
            {props.company}
        </CompanyStyled>
        <Highlights
            new={props.new}
            featured={props.featured}
        />
    </CompanyHeader>
);
}

export default Company;