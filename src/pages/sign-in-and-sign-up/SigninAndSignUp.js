import React from "react";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/sign-up/Sign-up";
import "./SignAndSignup.scss";
const SigninAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SigninAndSignUp;
