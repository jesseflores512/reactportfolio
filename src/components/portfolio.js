import React from 'react';
import Project from '../subcomponents/project'

export default class Portfolio extends React.Component {
  render(){
    const test = 'test'
    const rep = {
      text : 'This is an app made with basic HTML/CSS/JS. Using 2 google APIs it finds your representatives based on your location',
      image : require('../images/projectimages/rep.png'),
      link : 'https://arnoldrz2.github.io/Know-Your-Rep/'
    };
    return(
        <div>
          <div className='portfolio'>
              <Project text = {rep.text} image = {rep.image} link ={rep.link}/>
              <Project text = {test}/>
              <Project text = {test}/>
              <Project text = {test}/>
          </div>
        </div>
    )
  }
}
