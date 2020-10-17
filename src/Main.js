import React from 'react';
import styled from 'styled-components'
import Card from './Card';
import FilterMenu from './Filter-Menu'
import { useJobs } from './JobProvider';


const MainStyled = styled.main`
    @media (min-width: 768px) {
        padding: 0 2.5%;
    }
`;


function Main() {
    
    const { filteredJobs, filters } = useJobs();
    
    return (
        <MainStyled>
            { filters.length >= 1 ? <FilterMenu /> : '' }

            {filteredJobs.map((job, i) => (
                <Card
                    key={job.id}
                    company={job.company}
                    new={job.new}
                    featured={job.featured}
                    logo= {job.logo}
                    contract={job.contract}
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