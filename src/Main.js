import React from 'react';
import styled from 'styled-components'
import Card from './Card';
import data from './data/data.json';
console.log(data);

let dataFilter = data.filter(data => data.tools.includes('React'));

console.log(dataFilter);

const MainStyled = styled.main`
    background-color: hsl(180, 52%, 96%);
`;


function Main() {
  return (
        <MainStyled>
            {dataFilter.map((job, i) => (
                <Card
                    key={job.id}
                    company={job.company}
                    new={job.new}
                    featured={job.featured}
                    logo= {job.logo}
                    position={job.position}
                    postedAt={job.postedAt}
                    location={job.location}
                    role={job.role}
                    level={job.level}
                    tools={job.tools}
                    languages={job.languages}

                />
            ))}
        </MainStyled>
    );
}

export default Main;