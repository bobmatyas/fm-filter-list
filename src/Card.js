import React from 'react';
import styled from 'styled-components';
import Company from './Card-header';
import Title from './Card-title';
import Details from './Card-details';
import Technologies from './Card-technologies';
import Logo from './images/photosnap.svg';

const CardStyled = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 10px 24px -3px hsla(180, 14%, 20%, 0.1);
    padding: 25px; 
    margin: 5% auto;
    max-width: 1100px;

    @media (min-width: 768px) {
      align-items: center; 
      display: flex;
      justify-content: space-between;
    }
  `;

const CompanyInfo = styled.div`
    display: flex; 
    align-items: center;
`; 

const CompanyDetails = styled.div`
    margin-left: 25px; 
`;

function Card() {
  return (
    <CardStyled>
        <CompanyInfo>
          <img src={Logo} style={{float: "left"}} alt="Photosnap" />
            <CompanyDetails>
              <Company company="Photosnap" />
              <Title title="Senior Frontend Developer" />
              <Details />
            </CompanyDetails>
        </CompanyInfo>
      <Technologies />
    </CardStyled>
    );
}

export default Card;