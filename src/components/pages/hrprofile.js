import React from 'react';

const HRProfilePage = () => {

  const [hrProfiles] = React.useState([
    {
      email: 'hr1@example.com',
      profilePicture: 'https://i.pinimg.com/custom_covers/200x150/85498161615209203_1636332751.jpg',
      about: 'Experienced HR professional with a focus on talent acquisition and employee development.',
      userType: 'hr',
    },
    {
      email: 'hr2@example.com',
      profilePicture: 'https://i.pinimg.com/custom_covers/200x150/85498161615209203_1636332751.jpg',
      about: 'Skilled HR manager with expertise in building effective teams and fostering a positive work environment.',
      userType: 'hr',
    },
    // Add more HR profile objects here
  ]);

  return (
    <div>
      <h1>HR Profiles</h1>
      {hrProfiles.map((hr, index) => (
        <div key={index}>
          <h2>{hr.email}</h2>
          <img src={hr.profilePicture} alt="Profile" />
          <p>About: {hr.about}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default HRProfilePage;
