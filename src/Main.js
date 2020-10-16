import React from 'react';
import styled from 'styled-components'
import Card from './Card';
import { useJobs } from './JobProvider';


const MainStyled = styled.main`
    background-color: hsl(180, 52%, 96%);
`;


function Main() {
    
    const { filteredJobs } = useJobs();
    const { filters } = useJobs();
    
    return (
        <MainStyled>
            { filters.length >= 1 ? 'filters' : '' }

            {filteredJobs.map((job, i) => (
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