import React from 'react';
import styled from 'styled-components';

const Tool = styled.li`
    background-color: hsl(180, 31%, 95%);  
    border-radius: 5px;
    color: hsl(180, 29%, 50%);
    font-size: 12px;
    font-weight: 700;
    margin: 10px 10px 0 0;
    padding: 10px;
`;

function FilterTools(props) {

    const data = props.tools;

  return (
    <>
      <Tool>{data}</Tool>
    </>
    );
}

export default FilterTools;