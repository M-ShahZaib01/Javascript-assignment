ClrOutput = () => {
    document.getElementById("output").innerHTML = "";
    ClrOrgTxt();
}
ClrOrgTxt=()=>{
    document.getElementById("orignalTextBox").innerHTML = "";

}
const ShowOutput = (Output) => {
    document.getElementById("output").innerHTML = Output;
}
const originalText = (orgText) => {
    document.getElementById("orignalTextBox").innerHTML = orgText;
}

document.getElementById("cntStr").onclick = ()=>{
    
    ClrOutput();
    let firstName = "Shahzaib"
    let lastName=" Rajpoot"
    let fullName = firstName + lastName;
    let html = `let firstName = "Shahzaib"<br>
    let lastName="Rajpoot"<br>
    let fullName = firstName + lastName;`
    originalText(html);
    ShowOutput(fullName)
}
document.getElementById("askName").onclick = ()=>{
    let name = prompt("Please Enter Your Name: ")
    ClrOrgTxt();
    ClrOutput();
    let html = `let name = prompt("Please Enter Your Name: ")`
    originalText(html);
    ShowOutput(name);
}
document.getElementById("cmprsn").onclick = ()=>{
    ClrOrgTxt();
    ClrOutput();
    let AliAge = 19;
    let AmirAge = 23
    let result = AmirAge > AliAge;
    let html = `let AliAge = 19;<br>
    let AmirAge = 23;<br>
    let result = AmirAge > AliAge;`
    ShowOutput(result);
    originalText(html)
}

document.getElementById("ifElseIf").onclick = ()=>{
    let num1 = 3;
    let num2 = 2;

    if (num1 >= num2) {
        alert("Your condition is true")

    } else if (num1 == num2) {

        alert("Your Second condition is true")

    } else if (num1 <= num2) {

        alert("Your Third condition is true")

    } else {

        alert("Your condition is false.")

    }
}
document.getElementById("testCond").onclick = ()=>{

let age = prompt("Please Enter Your age?")

let weight = prompt("Please Enter Your weight?")

if (age >= 18 && weight <= 70) {

    alert("You are a smart man.")

} else if (age >= 18 && weight > 70) {

    alert("You are a fat Guy")

} else {

    alert("You are a Baby.")
}

}
document.getElementById("ifNested").onclick = ()=>{

let year = prompt("Please Enter The Year: ")
var html;
if (year % 4 === 0) { 
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            html = "The year " + year + " is a leap Year"

        } else {
            html = "The year " + year + " is Not a leap Year"

        }
    } else {
        html = "The year " + year + " is a leap Year"
    }
} else {
    html = "The year " + year + " is Not a leap Year"
}
ClrOutput()
ShowOutput(html);

}
document.getElementById("login").onclick = ()=>{

alert("UserName: Shahzaib || Password: 6512")
let userName = prompt("Please Enter UserName: ")
let Password = prompt("Please Enter Password: ")

if(userName === 'Shahzaib' && Password=== '6512'){
    let html= `<span style = "font-size: 23px; color:green;"> Congratulations You've Been logged in!<span>`
    alert("Hurrah!!!")
    ShowOutput(html);
}
else{
    alert("Try Again")
}
}