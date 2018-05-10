import React from 'react';
import Project from '../subcomponents/project'
import Grid from 'react-css-grid'

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
