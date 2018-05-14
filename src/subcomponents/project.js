import React from 'react';

export default class Project extends React.Component {
  render(){
    return(

        <div>
          <div className='project'>
            <img src={this.props.image} alt='project'></img>
            <p className='projectText'>
              {this.props.text} <br/>
              <a href = {this.props.link} className='contacts' target="_blank">VISIT</a>
            </p>


          </div>
        </div>
    )
  }
}
