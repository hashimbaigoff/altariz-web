import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './form.scss';

const Login = ({ containerRef }) => {
    // validation
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("")
    const [regName, setRegName] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("")
    const validName = (e) => {
        setName(e.target.value)
        setNameError("");
        setRegName(" ")
    }
    const validPassword = (e) => {
        setPassword(e.target.value);
        setPassError("")
    }

    const handleLogin = () => {
        let regName = /^[a-z A-Z]+$/;
        if (name === "") {
            setNameError("Enter Your Name")
        } else if (!regName.test(name)) {
            setRegName("Enter Valid Name")
        } else if (password === "") {
            setPassError("Enter Your Password")
        } else {
            alert("successful");
        }
    }
    return (
        <div className="container-login-register" ref={containerRef}>
            <div className="header-login-register">Login</div>
            <form action="" encType="multipart/form-data">
                <div className="content-login-register">
                    {/* <div className="image">
                    <img src="/images/login-and-register.jpg" alt="Login/Register" width="200px" height="100px" />
                </div> */}
                    <div className="form">
                        <div className="form-group">
                            <label className="label-login-register" htmlFor="username">Username</label>
                            <div className="icons">
                                <input className="input-login-register" type="text" name="username" placeholder="Username" value={name} onChange={validName} />
                                <FaUser /><br />
                                <span className="span-error">{nameError}</span><br />
                                <span className="span-error">{regName}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label-login-register" htmlFor="password">Password</label>

                            <div className="icons">
                                <input className="input-login-register" type="password" name="password" placeholder="Password" value={password} onChange={validPassword} />
                                <FaLock /><br />
                                <span className="span-error">{passError}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-login-register">
                    <button type="button" className="btn" onClick={handleLogin}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Login;