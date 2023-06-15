import React, { useState, useEffect } from 'react';
import './App.css'
const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:3000/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:'(error));
    }
  };

  return (
    <div className="container">
      <h1>Jobify.com</h1>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index}>
            <h3 className="job-title">{job.CompanyName}</h3>
            <p className="job-details">
            <p >Role: {job.jobname}</p>
            <p >Experience Required: {job.Expertiserequired}</p>
            <p >Location: {job.Location}</p>
            <p >Salary: <span className="job-salary">{job.Salary}</span></p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  

}

export default App;
