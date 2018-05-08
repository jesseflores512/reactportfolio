import React from 'react';

export default class Navbar extends React.Component {
  render(){
    return(
        <nav>
          <ul className ='navLinks' role="navigation">
            <li className ='name'><a href='/'>Jesse Flores</a></li>
            <li><a href='/'>Portfolio</a></li>
            <li><a href='/'>About Me</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
        </nav>
    )
  }
}
