import React from "react";
import "./SignIn.scss";
import Forminput from "../formInput/Forminput";
import CustomButton from "../customButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/util";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error ) {
      console.error(error);
    }
  };
  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <Forminput
            type="email"
            name="email"
            required
            label="Email:"
            handleChange={this.handleChange}
            value={this.state.email}
          />
          {/* <input
            type="email"
            name="email"
            onChange={this.handleChange}
            required
            value={this.state.email}
          /> */}
          <Forminput
            type="password"
            name="password"
            required
            handleChange={this.handleChange}
            value={this.state.password}
            label={"Password:"}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
