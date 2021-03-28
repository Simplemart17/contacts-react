import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/homePage'
import Contact from '../pages/contacts'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contacts" component={Contact} />
  </Switch>
)

export default Routes
