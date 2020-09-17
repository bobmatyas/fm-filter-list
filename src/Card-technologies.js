import React from 'react';
import styled from 'styled-components';

const ListStyled = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    list-style-type: none;
    margin: 20px 0;
    padding: 0;
`;

const Technology = styled.li`
    background-color: hsl(180, 31%, 95%);  
    border-radius: 5px;
    color: hsl(180, 29%, 50%);
    font-size: 12px;
    font-weight: 700;
    margin: 10px 10px 0 0;
    padding: 10px;
    text-transform: uppercase;
`;

function Technologies(props) {
 
  return (
    <ListStyled>
        <Technology>Frontend</Technology>
        <Technology>Senior</Technology>
        <Technology>HTML</Technology>
        <Technology>CSS</Technology>
        <Technology>Javascript</Technology>
    </ListStyled>
    );
}

export default Technologies;