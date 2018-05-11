import React from 'react';
import Project from '../subcomponents/project'

export default class Portfolio extends React.Component {
  render(){
    return(
        <div>
          <div className='portfolio'>
              <Project />
              <Project />
              <Project />
              <Project />
          </div>
        </div>
    )
  }
}
