import React, { Component } from "react";
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user/user.actions'
import "./register.styles.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword){
        alert("password do not march")
        return; 
    }

    this.props.signUpStart({displayName, email, password})

    // try{
    //     const {user} = await auth.createUserWithEmailAndPassword(
    //         email, 
    //         password
    //     );

    //     await createUserProfileDocument(user, {displayName})

    //     this.setState({
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: '',
    //     })
    // } catch(error){
    //     console.log(error);
    // }
}

  render() {
    return (
      <div className="register">
        <h1>Register</h1>

        <form className="register__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton  type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(Register);
