import React, { useState } from 'react';

const JobsPage = () => {
  const [jobs] = useState([
    {
      id: 1,
      name: 'Software Developer',
      role: 'Full Stack Developer',
      location: 'San Francisco',
      experience: '3+ years',
      type: 'On-site',
      salary: '$80,000 - $100,000',
      description: 'Join our team as a skilled software developer and contribute to cutting-edge projects.',
      requirements: 'Bachelor\'s degree in Computer Science, proficiency in JavaScript, etc.',
    },
    {
      id: 2,
      name: 'UX Designer',
      role: 'UI/UX Designer',
      location: 'New York',
      experience: '5+ years',
      type: 'Hybrid',
      salary: '$70,000 - $90,000',
      description: 'We are seeking a talented UX designer to create intuitive user experiences.',
      requirements: 'Experience with wireframing tools, strong visual design skills, etc.',
    },
    // Add more job objects here
  ]);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleApply = (job) => {
    // Handle job application logic here
    console.log('Applying for job:', job.name);
  };

  return (
    <div>
      <h1>Available Jobs</h1>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h2>{job.name}</h2>
          <p><strong>Role:</strong> {job.role}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <div>
            {selectedJob === job ? (
              <div>
                <p><strong>Description:</strong> {job.description}</p>
                <p><strong>Requirements:</strong> {job.requirements}</p>
                <button onClick={() => setSelectedJob(null)}>Close Details</button>
                <button onClick={() => handleApply(job)}>Apply</button>
              </div>
            ) : (
              <div>
                <button onClick={() => handleViewDetails(job)}>View Details</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsPage;
