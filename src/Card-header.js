import React from 'react';
import styled from 'styled-components';

const CompanyStyled = styled.h2`
    color: hsl(180, 8%, 52%);
    font-size: 12px;
`;


function Company(props) {
  return (
    <CompanyStyled>
        {props.company}
    </CompanyStyled>
    );
}

export default Company;