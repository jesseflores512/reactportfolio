import React from 'react';

export default class About extends React.Component {
  render(){
    return(
        <div>
          <div className='aboutPage'>
            <div className='aboutMe'>
              <h1 className='aboutHeading'>Hello, I'm Jesse. Nice to meet you.</h1>
              <p>
                &emsp;I'm an Air Force veteran and a full-stack javascript developer.
                I'm highly driven and motivated to get better at my craft. Everyday I'm learning new skills,
                or improving what I already know.<br/> Here are the languages and frameworks I know:
                </p>
                <ul className='aboutList'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>Node.JS</li>
                  <li>Express</li>
                  <li>Mongodb</li>
                  <li>MySQL</li>
                  <li>React.js</li>
                </ul>
            </div>
          </div>
        </div>
    )
  }
}
