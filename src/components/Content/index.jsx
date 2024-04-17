import React from "react";
import './content.scss';
function Content(){
    return(
        <div className="content-head">
            <div className="content-image">
            <img src="https://i.ytimg.com/vi/n9G4p4o-hfs/maxresdefault.jpg" alt="What's on your mind, if you will allow the overstatement | Picture Quotes" class=" nofocus" tabindex="0" aria-label="What's on your mind, if you will allow the overstatement | Picture Quotes" role="button" data-bm="6" width='300px' height='300px'/>
                {/* <img src="/images/mind.jpg" width='500px' height='300px'></img> */}
            </div>
            <div className="content-text">
            <h3 className="content-heading">What’s on your mind?</h3>
            <p className="content-paragraph">We are here to help you! Tell us what you’re looking for & we’ll get you connected to the right path of your future to the right place.</p>
            </div>
            
        </div>
    )
}
export default Content;