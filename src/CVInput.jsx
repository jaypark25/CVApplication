import React, { useState } from 'react';
import './CVInput.css';
import CVDisplay from './CVDisplay';
import Logo from './assets/logo.png';


function CVInput() {
    const [userInfo, setUserInfo] = useState({});

    const handleCVSubmit = (userInfo) => {
        setUserInfo(userInfo);
    };

    return (
        <div id="mainPage">
            <div id="background">
                <div id="inputArea">
                
                  <img src = {Logo} id = "logo"/>
                  <CVForm onSubmit={handleCVSubmit} />
                  
                </div>
                
            </div> 
            <CVDisplay userInfo={userInfo} />
        </div>
    );
}

function CVForm({ onSubmit }) {

    const [currName, setName] = useState('');
    const [currEmail, setEmail] = useState('');
    const [currNumber, setNumber] = useState('');
    const [currSchool, setSchool] = useState('');
    const [currTitle, setTitle] = useState('');
    const [currDate, setDate] = useState('');
    const [currDescription, setDescription] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      currName,
      currEmail,
      currNumber,
      currSchool,
      currTitle,
      currDate,
      currDescription,
    };
    onSubmit(userInfo);
    console.log(userInfo);
  };

  return (
    <form onSubmit={handleSubmit} id="cvid">
      <fieldset className="info">
        <div id="personalInfo">
          <label>
            Name
          </label>
          <input type="text" value={currName} onChange={(e) => setName(e.target.value)} />
        
          <label>
            Email
          </label>
          <input type="email" value={currEmail} onChange={(e) => setEmail(e.target.value)} />
        
          <label>
            Cell Number
          </label>
          <input type="tel" value={currNumber} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div id="divider"></div>
        <label>Education Institution </label>
        <input type="text" value={currSchool} onChange={(e) => setSchool(e.target.value)} />
        <label>Title of Studies </label>
        <input type="text" value={currTitle} onChange={(e) => setTitle(e.target.value)} />
        <label>Expected Graduation </label>
        <input type="date" value={currDate} onChange={(e) => setDate(e.target.value)} />
        <div id="descriptionArea">
          <label>Education Description </label>
          <textarea id = "description" type="text" value={currDescription} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className = "submitButton"type="submit" value = "submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default CVInput;