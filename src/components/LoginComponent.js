import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {updateUsername} from '../actions/index'
import { UPDATE_USERNAME } from "../const/index";
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username:'',
          password:''
        };
      }
    changeInputValue(e){
        this.setState({[e.target.name]:e.target.value.trim()})

    }
    submitForm(e){
      e.preventDefault();
      const validation = this.validationForm();
      if (validation.error) {
        alert(validation.msg);
      }else{
        const {username} = this.state
        alert('Submit form success');
        this.props.updateUsername(username);
        console.log(this.props);
        this.props.history.replace({ pathname: '/home' });
      }
    }

    validationForm() {
      let returnData = {
        error : false,
        msg: ''
      }
      const {username, password} = this.state
      //Kiểm tra username
      const re = /[^\w\s]/;
      if (re.test(username)||/\s/.test(username) ||username==="") {
        returnData = {
          error: true,
          msg: 'Incorrect username'
        }
      }
      //Kiểm tra password
      if(password.length < 8) {
        returnData = {
          error: true,
          msg: 'Incorrect password'
        }
      }
      return returnData;
    }
    render(){
        return(
            <div className="container" style={{ paddingTop: "5%" }}>
            <form
              onSubmit={e => {
                this.submitForm(e);
              }}
            >
              <div className="form-group">
                <label htmlFor="text">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter username"
                  onChange={e => this.changeInputValue(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  onChange={e => this.changeInputValue(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            
          </div>
    );
    }
    componentWillUnmount(){
      console.log(this.props);
    }
}
const mapDispatchToProps = (dispatch) =>  {
  return {
    updateUsername: (content) => {
      dispatch(updateUsername(content))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)