import React from 'react';

export default class Navbar extends React.Component {
  render(){
    return(
        <nav>
          <ul className ='navLinks' role="navigation">
            <li className ='name'><a href='/'>Jesse Flores</a></li>
            <li><a href='/portfolio'>Portfolio</a></li>
            <li><a href='/about'>About Me</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </nav>
    )
  }
}
