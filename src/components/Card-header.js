import React from 'react';
import styled from 'styled-components';
import Highlights from './Card-header-highlights';
import Title from './Card-title';
import Details from './Card-details';

const CompanyInfoHolder = styled.div`
    align-items: center;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const CompanyHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
`;

const CompanyStyled = styled.h2`
    color: hsl(180, 29%, 50%);
    font-size: 12px;
    margin: 0;
`;

const CompanyDetails = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        margin-left: 25px;
    }
`;

const CompanyLogo = styled.img`
    @media (max-width: 767px) {
        margin-top: -50px;
        margin-bottom: 15px;
        max-width: 50px;

    }
`;


function Company(props) {
  return (
    <CompanyInfoHolder>
        <CompanyLogo src={props.logo} alt={props.company} />

    <CompanyDetails>
    <CompanyHeader>
        
        <CompanyStyled>
            {props.company}
        </CompanyStyled>
        <Highlights
            new={props.new}
            featured={props.featured}
        />
    </CompanyHeader>
    <Title position={props.position} />
              <Details 
                location={props.location}
                position={props.contract} 
                postedAt={props.postedAt}
              />
    </CompanyDetails>

    </CompanyInfoHolder>
);
}

export default Company;