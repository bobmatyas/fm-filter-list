import React, { createContext, useState, useContext } from "react";

const JobsContext = createContext();
export const useJobs = () => useContext(JobsContext);

export default function JobProvider ({ children }) {
    
    const [filters, setFilter ] = useState([]);

    const addFilter = (filter) => {

        console.log('add clicked')
        console.log(filters);
        
        if (filters.length === 0) 
            setFilter([filter]);
        else {
            console.log(`2nd condition`)
            setFilter([
                ...filters, 
                filter
            ]
            )      
        }
        console.log(filters);

        
    }

    return (
        <JobsContext.Provider value={{ addFilter, filters }} >
            {children}
        </JobsContext.Provider>
    );
}
