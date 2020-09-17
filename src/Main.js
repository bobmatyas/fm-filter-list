import React from 'react';
import styled from 'styled-components'
import Card from './Card';
import data from './data/data.json';
console.log(data);

const MainStyled = styled.main`
    background-color: hsl(180, 52%, 96%);
`;


function Main() {
  return (
        <MainStyled>
            <Card />
            {data.map((job, i) => (
                <Card
                    key={job.id}
                    company={job.company}
                    logo={job.logo}
                    position={job.position}
                    postedAt={job.postedAt}
                />
            ))}
        </MainStyled>
    );
}

export default Main;