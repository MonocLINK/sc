import React from 'react';

import {
    HashRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Experiences from '../pages/Experiences';
import { StyledNav, StyledLink } from './Styles/StyledNavbar';

const Navbar = () => {

    return (
        <Router>
            <StyledNav>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/experiences">Experiences</StyledLink>
            </StyledNav>

            <Routes>
                <Route exact path="/" element={
                    <Home />
                }>
                </Route>
                <Route path="/about" element={
                    <About />
                }>
                </Route>
                <Route path="/experiences" element={
                    <Experiences />
                }>
                </Route>
            </Routes>
        </Router>
    )
    
}

export default Navbar;
