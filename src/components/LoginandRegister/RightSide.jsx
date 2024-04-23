import React, { forwardRef } from "react";
import './rightside.scss';

const RightSide = forwardRef(({ current, onClick, containerRef}) => {
    return (
        <div className="right-side" onClick={onClick} ref={containerRef}>
            <div className="inner-container">
                <div className="right-side-text">{current}</div>
            </div>

        </div>
    )
})
export default RightSide;