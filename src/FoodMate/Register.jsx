import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: JSON.parse(localStorage.getItem('account'))
    };
  }

  componentDidUpdate() {
    localStorage.setItem('account', JSON.stringify(this.state))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      // Handle registration logic here
      console.log("Registered successfully");
      window.location.href = `/Login`
    }
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;

    return (
      <div className="Register">
        <div className="Register-Container">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="Register-Field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="Register-Field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="Register-Field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="Register-Field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" className="Register-Button">Register</button>
          </form>
          <div className="Register-Footer">
            <p>
              Already have an account? <a href="/login" className="Register-Link">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
