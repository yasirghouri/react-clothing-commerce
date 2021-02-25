import React, { useState } from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./SignInStyles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
