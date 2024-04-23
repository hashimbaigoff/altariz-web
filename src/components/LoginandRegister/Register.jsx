import React from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './form.scss';
const Register = ({ containerRef }) => {
    return (
        <div className="container-login-register" ref={containerRef}>
            <div className="header-login-register">Register</div>
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
                            <label className="label-login-register" htmlFor="email">Email</label>
                            <div className="icons">
                            <input className="input-login-register" type="text" name="email" placeholder="Email"  />
                            <MdEmail />
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
export default Register;