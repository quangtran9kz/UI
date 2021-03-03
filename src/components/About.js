import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1> About Page</h1>
            <Link to="/">Home Page </Link>
        </div>
    );
};

export default About;
