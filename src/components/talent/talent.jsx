import React from "react";
import './talent.scss';
function Talent(){
    return(
        <div className="talent-content">
            <div className="talent-text">
                <h2 className="talent-heading">We turn talent into greatness.</h2>
                <p className="talent-paragraph">Altariz solutions Pvt Ltd. Changes lives, Organizations and nations through digital upskilling, Developing the edge you need to conquer what’s next.</p>
            </div>
            <div className="talent-img">
                <img src="/images/talent.jpg" alt="img" width='300px' height='282px' ></img>
            </div>
        </div>
    )

}
export default Talent;