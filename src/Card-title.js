import React from 'react';
import styled from 'styled-components';

const ListStyled = styled.h3`
    color: hsl(180, 14%, 20%);
    font-size: 15px;
`;


function Details(props) {
  return (
    <ListStyled>
        {props.title}
    </ListStyled>
    );
}

export default Details;