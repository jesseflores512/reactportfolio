import React from 'react';

export default class Project extends React.Component {
  render(){
    return(
        <div>
          <div className='project'>
            <img src={require('../images/projectimages/rep.png')} alt='project'></img>
            <p className='projectText'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

          </div>
        </div>
    )
  }
}
