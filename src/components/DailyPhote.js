import React from "react";
import {Caption, Title, Parg, Cent, Nasa} from "../Styles";


const DailyPhote = (props) => {
    return(
        <Cent>
            <Nasa src={props.picture.hdurl} alt="space pic"/>
          
             <Title>{props.picture.title}</Title>

          <Parg>By:  {props.picture.copyright} </Parg>
           <Parg> {props.picture.explanation}</Parg>
              <Caption> {props.picture.date}</Caption> 
        </Cent>
    );
};

export default DailyPhote;