import React from "react";
import "./Button.css";

export interface buttonprops{
name:string,
onClick:any,
height:string,
width:string,
borderRadius:string,
testid:string
}
export function Button(props:buttonprops){
    return(
        <div>
<button 
onClick={props.onClick} 
style={{height:`${props.height}`,
width:`${props.width}`,
borderRadius:`${props.borderRadius}`}} 
className="choicesbutton" 
data-testid={props.testid} 
>{props.name}</button>
        </div>
    )
}