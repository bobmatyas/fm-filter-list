import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main';
import { useJobs } from './JobProvider';

function App() {

  const { filters } = useJobs();

  return (
    <div className="App">
      <Header />
      { filters.length >= 1 ? 'filters' : '' }
      <Main />
    </div>
  );
}

export default App;
