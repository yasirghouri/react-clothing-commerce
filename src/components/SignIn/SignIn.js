import React, { Component } from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { signInWithGoogle, auth } from "../../firebase/firebase";
import { googleSignInStart } from "../../redux/user/userActions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./SignInStyles";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
            label="Password"
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
