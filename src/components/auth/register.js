import React, { useState } from 'react';


const UserRegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [cv, setCV] = useState(null);
  const [skills, setSkills] = useState([]);
  const [description, setDescription] = useState('');
  const [about, setAbout] = useState('');
  const [experience, setExperience] = useState('');
  const [projects, setProjects] = useState('');

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleCVChange = (e) => {
    const file = e.target.files[0];
    setCV(file);
  };

  const handleAddSkill = () => {
    // Add skill to skills array
  };

  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    // Handle user registration form submission
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleUserFormSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={email} onChange={setEmail} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" value={password} onChange={setPassword} />
        </div>
        <div className="form-group">
          <label>Profile Picture</label>
          <input type="file" className="form-control-file" name="profilePicture" onChange={handleProfilePictureChange} />
        </div>
        <div className="form-group">
          <label>CV</label>
          <input type="file" className="form-control-file" name="cv" onChange={handleCVChange} />
        </div>
        <div className="form-group">
          <label>Skills</label>
          <input type="text" className="form-control" name="skills" value={skills} onChange={setSkills} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" name="description" rows="3" value={description} onChange={setDescription} />
        </div>
        <div className="form-group">
          <label>About</label>
          <textarea className="form-control" name="about" rows="3" value={about} onChange={setAbout} />
        </div>
        <div className="form-group">
          <label>Experience</label>
          <textarea className="form-control" name="experience" rows="3" value={experience} onChange={setExperience} />
        </div>
        <div className="form-group">
          <label>Projects</label>
          <textarea className="form-control" name="projects" rows="3" value={projects} onChange={setProjects} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

const HRRegisterForm = () => {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleHRFormSubmit = (e) => {
    e.preventDefault();
    // Handle HR registration form submission
  };

  return (
    <div>
      <h2>HR Registration Form</h2>
      <form onSubmit={handleHRFormSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={email} onChange={setEmail} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" value={password} onChange={setPassword} />
        </div>
        <div className="form-group">
          <label>Profile Picture</label>
          <input type="file" className="form-control-file" name="profilePicture" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>About</label>
          <textarea className="form-control" name="about" rows="3" value={about} onChange={setAbout} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

const RegisterPage = () => {
  const [userType, setUserType] = useState('user');

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <div>
        <button className="btn btn-primary mr-2" onClick={() => handleUserTypeSelect('user')}>Register as Job Seeker</button>
        <button className="btn btn-primary" onClick={() => handleUserTypeSelect('hr')}>Register as HR</button>
      </div>
      {userType === 'user' && <UserRegisterForm />}
      {userType === 'hr' && <HRRegisterForm />}
    </div>
  );
};

export default RegisterPage;
