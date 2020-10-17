import React from 'react';
import styled from 'styled-components';
import Company from './Card-header';

import Filters from './Card-filters';



const CardStyled = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 10px 24px -3px hsla(180, 14%, 20%, 0.1);
    padding: 25px; 
    margin: 50px 10px;


    @media (min-width: 768px) {
      align-items: center; 
      display: flex;
      justify-content: space-between;
      margin: 2.5% auto;
      max-width: 1000px;
    }
  `;

const CompanyInfo = styled.div`
    display: flex; 
    align-items: center;
`; 

const MobileSeparator = styled.hr`
    color: transparent;
    border-bottom: 2px solid #eee;
    padding-top: 20px;

    @media (min-width: 768px) {
      display: none;
    }

`;

const CompanyDetails = styled.div`
`;

function Card(props) {

  const tags = [props.role, props.level, ...props.languages, ...props.tools];

  let styles = {};
  if (props.new) 
    styles = {borderLeft: "5px solid hsl(180, 29%, 50%)"}
  
    return (
    <CardStyled style={styles}> 
        <CompanyInfo>
            <CompanyDetails>
              <Company 
                logo={props.logo}
                company={props.company} 
                contract={props.contract}
                new={props.new}
                featured={props.featured}
                position={props.position}
                location={props.location}
                postedAt={props.postedAt}
              />
            </CompanyDetails>
        </CompanyInfo>
        <MobileSeparator/>
      <Filters
        tags={tags}
      />
    </CardStyled>
    );
}

export default Card;