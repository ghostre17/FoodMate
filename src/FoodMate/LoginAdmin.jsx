import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

class LoginAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            account: null
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        const adminacc = {
            email: "admin@gmail.com",
            password: "admin123",
            username: "admin"
        }

    
        if (email === adminacc.email && password === adminacc.password) {
            sessionStorage.setItem('user', JSON.stringify(adminacc))
            window.location.href = '/AdminAdd';
            alert(`Login successfully as ${adminacc.username}`);
        } else {
            alert("Invalid Username and Password");
        }
    }

    render() {
        return (
            <div className="Login">
                <div className="Login-Container">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="Login-Field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="Login-Field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="Login-Button">Login</button>
                    </form>
                    <div className="Login-Footer">
                        <p>Belum punya akun? <Link to="/register" className="Login-Link">Daftar</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginAdmin;
