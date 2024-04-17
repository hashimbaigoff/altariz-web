import React from "react";
import './Banner.scss';

function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <h1 className="banner-heading">Welcome to the Altariz Solutions.</h1>
                <p className="banner-paragraph"> A realm of possibilities where your dreams find their wings and soar to new heights.<br/>

                    To all the aspiring minds seeking their dream jobs and our valued clients trusting us to discover their next superstar, I assure you that intellect staffing will always be your steadfast partner on this exciting voyage of growth and success.<br/><br/>

                   Together, let’s unlock the doors to a world of limitless possibilities!
                </p>
                <b> “Dare to dream big; your code can reshape the world.”</b>
            </div>
            <div className="banner-video">
            <iframe width="550" height="300" src="https://www.youtube.com/embed/D0UnqGm_miA" title="Dummy Video For Website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Banner;