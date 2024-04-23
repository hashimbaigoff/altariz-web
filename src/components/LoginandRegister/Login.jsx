import React from "react";
import {FaLock} from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './form.scss';

const Login = ({ containerRef }) => {
    return (
        <div className="container-login-register" ref={containerRef}>
            <div className="header-login-register">Login</div>
            <form>
            <div className="content-login-register">
                {/* <div className="image">
                    <img src="/images/login-and-register.jpg" alt="Login/Register" width="200px" height="100px" />
                </div> */}
                <div className="form">
                        <div className="form-group">
                            <label className="label-login-register" htmlFor="username">Username</label>
                            <div className="icons">
                            <input className="input-login-register" type="text" name="username" placeholder="Username" />
                            <FaUser />
                            </div>         
                        </div>
                        <div className="form-group">
                            <label className="label-login-register" htmlFor="password">Password</label>
                            
                            <div className="icons">
                            <input className="input-login-register" type="password" name="password" placeholder="Password" />
                            <FaLock/>
                            </div>
                        </div>     
                </div>
            </div>
            <div className="footer-login-register">
                <button type="submit" className="btn">Submit</button>
            </div>
            </form>
        </div>
    )
}
export default Login;