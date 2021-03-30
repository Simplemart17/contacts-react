import React from 'react';
import { Route } from 'react-router-dom';
import Contact from '../pages/contacts';

const Routes = () => <Route exact path="/" component={Contact} />;

export default Routes;
