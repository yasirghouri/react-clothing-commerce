import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import { AuthContainer } from "./AuthStyles";

const Auth = () => {
  return (
    <AuthContainer>
      <SignIn />
      <SignUp />
    </AuthContainer>
  );
};

export default Auth;
