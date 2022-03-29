document.getElementById("orignalTextBox2").innerHTML = "Learning JavaScript is Fun...!";
const OnclickBtn = (id,WhatToDo)=>{
    document.getElementById(id).onclick = WhatToDo;
}
const SqrANum = () => {

    let num = prompt('Enter a number', 0);
    let Sqrnum = Math.pow(num, 2);
    ShowOutput(`The Square of ${num} is: ${Sqrnum}`);
}
OnclickBtn("findSqr",SqrANum);
// document.getElementById("findSqr").onclick = SqrANum;

const roundNum = () => {

    let num = prompt('Enter a number', 0);
    let roundedNum = Math.round(num);
    ShowOutput(`The Rounded number is: ${roundedNum}`);
}
OnclickBtn("roundNum",roundNum);
