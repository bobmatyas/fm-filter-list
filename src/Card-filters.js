import React from 'react';
import styled from 'styled-components';
import FilterTools from './Card-filters-tools';
import FilterLanguages from './Card-filters-languages';
import FilterLevels from './Card-filters-levels';
import FilterRoles from './Card-filters-roles';

const ListStyled = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    list-style-type: none;
    margin: 20px 0;
    padding: 0;
`;


function Filters(props) {
 
  return (
    <ListStyled>
        <FilterLevels
            level={props.level}
        />
        <FilterRoles
            role={props.role}
        />
        <FilterLanguages
            languages={props.languages}
        />
        <FilterTools
            tools={props.tools}
        />
    </ListStyled>
    );
}

export default Filters;