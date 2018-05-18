import React from 'react';
import Project from '../subcomponents/project'

export default class Portfolio extends React.Component {
  render(){
    const test = 'test'
    const rep = {
      text : 'This app finds your representatives based on your location, using 2 google APIs. Made with HTML/CSS/JS/JQuery',
      image : require('../images/projectimages/rep.png'),
      link : 'https://arnoldrz2.github.io/Know-Your-Rep/'
    };

    const goals = {
      text : 'Made this simple webpage to learn CSS grids. Made with HTML/CSS/JS/JQuery',
      image : require('../images/projectimages/goals.png'),
      link : 'https://jesseflores512.github.io/goals/'
    };
    return(
        <div>
          <div className='portfolio'>
              <Project text = {goals.text} image = {goals.image} link ={goals.link}/>
              <Project text = {rep.text} image = {rep.image} link ={rep.link}/>
              

          </div>
        </div>
    )
  }
}
