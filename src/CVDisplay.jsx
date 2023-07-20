import React from 'react';
import './CVDisplay.css';



function CVDisplay ({userInfo} ) {
    const { currName, currEmail, currNumber, currSchool, currTitle, currDate, currDescription } = userInfo;

    return (
        <div id="backGround">
            <div id="paper">
                <div id="header">
                    <h1 id = "name">{currName}</h1>
                    <h3 className = "headerText">{currEmail}</h3>
                    <h3 className = "headerText">{currNumber}</h3>
                </div>
                <div id="pageDivider"></div>
                <div id="educationHistory">
                    <div id="schoolInfo">
                        <h1 id = "uniName" className = "headerText">{currSchool}</h1>
                        <h2 id = "gradDate" className="headerText">{currDate}</h2>
                    </div>
                    <textarea readOnly = "true" id = "displayDescription" type="text" value={currDescription} />
                </div>
            </div>
        </div>
    )
}

export default CVDisplay;