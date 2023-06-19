import React from 'react';

const Job = ({ job }) => {
  const { name, role, location, experience, type, description, requirements } = job;

  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Requirements:</strong> {requirements}</p>
    </div>
  );
};

export default Job;