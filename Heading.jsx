import React from 'react';

function Heading(){
let currTime= new Date(2020 , 5 , 5 , 18);
currTime= currTime.getHours();
let greeting=" ";
let cssStyle={ };

if(currTime>1 && currTime<12){
    greeting="Good Morning";
    cssStyle.color="green";
}
else if(currTime>1 && currTime<19){
    greeting="Good AfterNoon";
    cssStyle.color="orange";
}
else{
    greeting="Good Night";
    cssStyle.color="black";
}

    return(
    <> <div><h1> Hello Ji ,<span style={cssStyle}> {greeting} </span> </h1>
    </div></>
    )}
export default Heading;