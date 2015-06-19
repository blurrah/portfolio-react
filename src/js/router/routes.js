import React from 'react';
import { Route, Routes, DefaultRoute } from 'react-router';
import Application from '../Application';

// Pages
import IndexPage from '../components/Pages/Index/IndexPage';
import AboutPage from '../components/Pages/About/AboutPage';
import PortfolioDetailPage from '../components/Pages/PortfolioDetail/PortfolioDetailPage';

export default (
        <Route name="home" path='/' handler={Application}>
            <DefaultRoute name="IndexPage" handler={IndexPage} />
            <Route name="about" handler={AboutPage} />
            <Route name="portfolio" path="portfolio/:itemPermalink" handler={PortfolioDetailPage} />
        </Route>
);
