import React from "react";
import "./SignIn.scss";
import Forminput from "../formInput/Forminput";
import CustomButton from "../customButton/CustomButton";
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
    this.setState({ email: "", password: "" });
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
