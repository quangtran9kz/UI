import React, { Component } from "react";
import Home from './Home';
import About from './About';
import LoginComponent from './LoginComponent';
import { Switch,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {actAddNote} from '../actions/index';
const test = () => {
    return (
       <>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={LoginComponent} />
            </Switch>
       </>
    );
}

export default test;
