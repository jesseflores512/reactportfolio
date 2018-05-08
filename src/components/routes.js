import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './main';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';

const Routes = () => (
  <Switch>
    <Route exact path='/' component = {Main} />
    <Route exact path='/portfolio' component = {Portfolio} />
    <Route exact path='/about' component = {About} />
    <Route exact path='/contact' component = {Contact} />
  </Switch>
)

export default Routes;
