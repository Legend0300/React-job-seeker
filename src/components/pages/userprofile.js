import React from 'react';

const UserProfilePage = () => {
  const [users] = React.useState([
    {
      email: 'user1@example.com',
      profilePicture: 'https://i.pinimg.com/custom_covers/200x150/85498161615209203_1636332751.jpg',
      cv: 'path/to/cv-1.pdf',
      skills: ['JavaScript', 'React', 'CSS'],
      description: 'Experienced software developer with a passion for creating user-friendly applications.',
      about: 'I am a dedicated professional with a strong background in web development.',
      experience: 'Over 5 years of experience in full stack web development.',
      projects: 'Developed and deployed several web applications using React and Node.js.',
    },
    {
      email: 'user2@example.com',
      profilePicture: 'https://i.pinimg.com/custom_covers/200x150/85498161615209203_1636332751.jpg',
      cv: 'path/to/cv-2.pdf',
      skills: ['Python', 'Django', 'SQL'],
      description: 'Skilled back-end developer with expertise in database management.',
      about: 'I have a proven track record of delivering scalable web solutions.',
      experience: '3+ years of experience in Python development.',
      projects: 'Built RESTful APIs and optimized database queries for high-performance applications.',
    },
    // Add more user objects here
  ]);

  return (
    <div>
      <h2>User Profiles</h2>
      {users.map((user, index) => (
        <div key={index}>
          <div className="profile-picture">
            <img src={user.profilePicture} alt="Profile" />
          </div>
          <div className="profile-details">
            <h3>Email: {user.email}</h3>
            <h3>Skills:</h3>
            <ul>
              {user.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
            <h3>Description:</h3>
            <p>{user.description}</p>
            <h3>About:</h3>
            <p>{user.about}</p>
            <h3>Experience:</h3>
            <p>{user.experience}</p>
            <h3>Projects:</h3>
            <p>{user.projects}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfilePage;
