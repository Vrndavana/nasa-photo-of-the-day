import React from "react";


const DailyPhote = (props) => {
    return(
        <div className="image">
            <img src={props.picture.hdurl} alt="space pic"/>
        </div>
    );
};

export default DailyPhote;