import React from 'react';
import Project from '../subcomponents/project'

export default class Portfolio extends React.Component {
  render(){
    const test = 'test'
    const rep = {
      text : 'Find your representatives based on location, using 2 google APIs. Made with HTML/CSS/JS/JQuery',
      image : require('../images/projectimages/rep.png'),
      link : 'https://arnoldrz2.github.io/Know-Your-Rep/'
    };

    const goals = {
      text : 'Made this simple webpage to learn CSS grids. Made with HTML/CSS/JS/JQuery',
      image : require('../images/projectimages/goals.png'),
      link : 'https://jesseflores512.github.io/goals/'
    };

    const bio = {
      text : 'Responsive website made for music group in Austin Tx. Made with HTML and CSS',
      image : require('../images/projectimages/bio.png'),
      link : 'https://thebio.herokuapp.com/'
    };

    return(
        <div>
          <div className='portfolio'>
              <Project text = {goals.text} image = {goals.image} link ={goals.link}/>
              <Project text = {rep.text} image = {rep.image} link ={rep.link}/>
              <Project text = {bio.text} image = {bio.image} link ={bio.link}/>


          </div>
        </div>
    )
  }
}
