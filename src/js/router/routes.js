import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Application from '../Application';
import PortfolioPage from '../components/PortfolioPage';
import AboutPage from '../components/AboutPage';

export default (
    <Route name="home" path='/' handler={Application}>
        <DefaultRoute name="PortfolioPage" handler={PortfolioPage} />
        <Route name="about" handler={AboutPage} />
    </Route>
);
