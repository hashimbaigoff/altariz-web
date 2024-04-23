import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './form.scss';
const Register = ({ containerRef }) => {

    //validation 
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [regName, setRegName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const validName = (e) => {
        setName(e.target.value);
        setNameError("")
        setRegName(" ");
    }
    const validEamil = (e) => {
        setEmail(e.target.value);
        setEmailError("")
        setRegEmail(" ")
    }
    const handleRegister = () => {
        let regName = /^[a-z A-Z]+$/;
        let regEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (name === "") {
            setNameError("Enter Your Name");
        } else if (!regName.test(name)) {
            setRegName("Enter your Valid name")
        } else if (email === "") {
            setEmailError("Enter your Email");
        } else if (!regEmail.test(email)) {
            setRegEmail("Enter valid Email Address")
        } else {
            alert("successful")
        }
    }
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
                                <input className="input-login-register" type="text" name="username" placeholder="Username" value={name} onChange={validName} />
                                <FaUser /><br />
                                <span className="span-error">{nameError}</span><br />
                                <span className="span-error">{regName}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label-login-register" htmlFor="email">Email</label>
                            <div className="icons">
                                <input className="input-login-register" type="text" name="email" placeholder="Email" value={email} onChange={validEamil} />
                                <MdEmail /><br />
                                <span className="span-error">{emailError}</span><br />
                                <span className="span-error">{regEmail}</span>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="footer-login-register">
                    <button type="button" className="btn" onClick={handleRegister}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;