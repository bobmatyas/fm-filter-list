import React from 'react';
import styled from 'styled-components';
import Company from './Card-header';
import Title from './Card-title';
import Details from './Card-details';
import Filters from './Card-filters';



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

function Card(props) {

  const tags = [props.role, props.level, ...props.languages, ...props.tools];

  return (
    <CardStyled>
        <CompanyInfo>
          <img src={props.logo} style={{float: "left"}} alt={props.company} />
            <CompanyDetails>
              <Company 
                company={props.company} 
                new={props.new}
                featured={props.featured}
              />
              
              <Title position={props.position} />
              <Details 
                location={props.location}
                position={props.position} 
                postedAt={props.postedAt}
              />
            </CompanyDetails>
        </CompanyInfo>
      <Filters
        tags={tags}
      />
    </CardStyled>
    );
}

export default Card;