import React from 'react';

export default class Navbar extends React.Component {
  render(){
    return(
        <nav>
          <ul className ='navLinks'>
            <li className ='name'>Jesse Flores</li>
            <li>Portfolio</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </nav>
    )
  }
}
