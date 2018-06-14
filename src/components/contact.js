import React from 'react';

export default class Contact extends React.Component {
  render(){
    return(
        <div>
          <div className='contactPage'>
            <div className='contact'>
              <h1>Contact</h1>
              <p>
                Email: <a href='mailto: jesseflores512@gmail.com' className='contacts'>jesseflores512@gmail.com</a><br/>
                Phone: 512-573-5339 <br/>
                Github: <a href='https://github.com/jesseflores512' className='contacts' target="_blank">Click to view</a><br/>
                LinkedIn: <a href='https://www.linkedin.com/in/jesseflores512/' className='contacts' target="_blank">Click to view</a>
              </p>
            </div>
          </div>
        </div>
    )
  }
}
