import React from 'react';
import styled from 'styled-components';
import { useJobs } from './JobProvider';

const Tool = styled.li`
    background-color: hsl(180, 31%, 95%);  
    border-radius: 5px;
    color: hsl(180, 29%, 50%);
    font-size: 12px;
    font-weight: 700;
    margin: 10px 10px 0 0;
    padding: 10px;
`;

function FilterRoles(props) {
    
  const { addFilter } = useJobs();
    const data = props.role;

  return (
      <Tool
        onClick={
          ()=> addFilter(data)
      }
      >
        {data}
      </Tool>
    );
}

export default FilterRoles;