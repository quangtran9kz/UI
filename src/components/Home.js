import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {getUsername} from '../actions/index'
import { GET_USERNAME } from "../const/index";
const Home = (props) => {
    const [username, updateUsername] = React.useState('');
    useEffect(() => {
        console.log("12333333333");
        updateUsername(props.user.username);
    },[])
    return (
        <div>
        <h1> Home Page</h1>
        <Link to="/about">About / </Link>
        <Link to="/login">Login / </Link>
        <p>{username}</p>
        </div>
    );
};
const mapDispatchToProps = (dispatch) =>  {
    return {
      getUsername: () => {
        dispatch(getUsername())
      }
    }
  }
  
  const mapStateToProps = (state, props) => {
    return {
      user: state.login.user
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Home);
