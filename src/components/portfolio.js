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

    const marvel = {
      text : 'An app that utilizes AJAX with the Marvel Comics API. Made with JQuery and CSS Grids',
      image : require('../images/projectimages/marvel.png'),
      link : 'https://jesseflores512.github.io/marvelapp/'
    };

    const bio = {
      text : 'Responsive website made for music group in Austin Tx. Made with HTML and CSS',
      image : require('../images/projectimages/bio.png'),
      link : 'https://thebio.herokuapp.com/'
    };
    const quiz = {
      text : 'A quiz game made with HTML/CSS/Javascript',
      image : require('../images/projectimages/quiz.png'),
      link : 'https://jesseflores512.github.io/quiz/'
    };

    return(
        <div>
          <div className='portfolio'>
              <Project text = {marvel.text} image = {marvel.image} link ={marvel.link}/>
              <Project text = {rep.text} image = {rep.image} link ={rep.link}/>
              <Project text = {bio.text} image = {bio.image} link ={bio.link}/>
              <Project text = {quiz.text} image = {quiz.image} link ={quiz.link}/>

          </div>
        </div>
    )
  }
}
