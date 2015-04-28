import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Application from '../Application';
import PortfolioPage from '../components/PortfolioPage';
import AboutPage from '../components/AboutPage';
import PortfolioDetail from '../components/PortfolioDetail';

export default (
    <Route name="home" path='/' handler={Application}>
        <DefaultRoute name="PortfolioPage" handler={PortfolioPage} />
        <Route name="about" handler={AboutPage} />
        <Route name="PortfolioPager" path="/portfolio" handler={PortfolioPage}>
            <Route name="PortfolioDetail" path=":itemPermalink" handler={PortfolioDetail} />
        </Route>
    </Route>
);
