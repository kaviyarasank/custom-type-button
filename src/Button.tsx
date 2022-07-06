import React from "react";

export interface buttonprops{
name:string,
onClick:any,
height:string,
width:string,
borderRadius:string,
testid:string,
textAlign:any,
color:string,
background:string,
transition:string,
boxShadow:string,
border:string,
backgroundSize:string,
fontSize:string,
disabled:any
}
export function Button(props:buttonprops){
    return(
        <div>
<button 
onClick={props.onClick} 
disabled={props.disabled}
style={{height:`${props.height}`,
textAlign:props.textAlign,
border:`${props.border}`,
transition:`${props.transition}`,
boxShadow:`${props.boxShadow}`,
color:`${props.color}`,
background:`${props.background}`,
width:`${props.width}`,
fontSize:`${props.fontSize}`,
backgroundSize:`${props.backgroundSize}`,
borderRadius:`${props.borderRadius}`}}  
data-testid={props.testid} 
>{props.name}</button>
        </div>
    )
}