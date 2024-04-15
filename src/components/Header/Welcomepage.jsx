import React from "react";
import '../Css/Header/welcomepage.css';

function WelcomePage(){
    return(
        
           <div className="contain">
                <div className="home-content">
                <h1>Welcome To Altariz Solutions Pvt Ltd.</h1>
            <p>Welcome to the Altariz Solutions, a realm of possibilities where your dreams find their wings and soar to new heights.<br/>

                To all the aspiring minds seeking their dream jobs and our valued clients trusting us to discover their next superstar, I assure you that intellect staffing will always be your steadfast partner on this exciting voyage of growth and success.<br/>

                Together, let’s unlock the doors to a world of limitless possibilities!<br/>


                “Dare to dream big; your code can reshape the world.”
            </p>
                </div>
                <div className="home-video">
                <iframe width="580" height="326" src="https://www.youtube.com/embed/D0UnqGm_miA" title="Dummy Video For Website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div> 
      
    )
}
export default WelcomePage;