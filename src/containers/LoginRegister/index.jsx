import React, { useEffect, useRef, useState,element } from "react";
import './LogReg.scss';

// import { Login,Register} from "../../components/LoginandRegister/index";
import Login from '../../components/LoginandRegister/Login.jsx'
import Register from '../../components/LoginandRegister/Register.jsx'
import RightSide from "../../components/LoginandRegister/RightSide.jsx";

const LogandReg=()=>{
    const [isLogginActive,setIsLogginActive]=useState(true);

    const containerRef = useRef(null);
    const rightSideRef = useRef(null);
    const leftSideRef = useRef(null);

    const changeActiveComponent = ()=>{
        setIsLogginActive(!isLogginActive);
    };
    useEffect(()=>{
        if(rightSideRef.current){
            rightSideRef.current.classList.add("right");
        }
    },[]);
  
 
    const changeState = ()=>{
        setIsLogginActive((prevIsLogginActive)=>!prevIsLogginActive);
        console.log(rightSideRef.current,"===>");
        if(rightSideRef.current){
            const element = rightSideRef.current;
            console.log(element);
            if(isLogginActive){
                element.classList.remove("right");       
                element.classList.add("left");
            }else{
                element.classList.remove("left");
                element.classList.add("right");
            }
            // setIsLogginActive((prevIsLogginActive)=>!prevIsLogginActive);
        }
    }
    const current = isLogginActive? "Register":"Login";
    return(
        <div className="main-login-register">
            <div className="login-register">
                <div className="main-container-login-register" ref={containerRef}>
                    {isLogginActive?(
                        <Login containerRef={containerRef}/>
                    ):(
                        <Register containerRef={containerRef}/>
                    )}
                </div>
                <RightSide current={current} containerRef={rightSideRef}   onClick={changeState}/>
              

            </div>
            
        </div>
    )
}

export default LogandReg;