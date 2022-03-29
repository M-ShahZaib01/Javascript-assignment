ClrOutput = () => {
    document.getElementById("output").innerHTML = "";
}
document.getElementById("clrInput").onclick = () => {

    document.getElementById("inputText").value = "";

}
const inputValue = () => {
    return document.getElementById("inputText").value;
}
const ShowOutput = (Output) => {
    document.getElementById("output").innerHTML = Output;
}
let OriginalText = `I'm Learning Web & Mobile App Development.<br>I love coding!</br>One Day I'll be a successful business man InShaAllah`
document.getElementById("orignalTextBox").innerHTML = OriginalText;

function round() {
    let num = parseInt(prompt("Please Enter a floating number"))
    let roundedNum = Math.round(num)
    ShowOutput(roundedNum)
}
function ceil() {
    let num = parseInt(prompt("Please Enter a floating number"))
    let roundedNum = Math.ceil(num)
    ShowOutput(roundedNum)
}
function floor() {
    let num = parseInt(prompt("Please Enter a floating number"))
    let roundedNum = Math.floor(num)
    ShowOutput(roundedNum)
}
function random() {
    let a = Math.random()
    ShowOutput(a)
}
function random() {
    let number = Math.random()
    ShowOutput(number)
}
function dice() {
    let dice = Math.floor(Math.random() * 6 + 1)
    ShowOutput(dice)
}
function genPassword() {
    let length = inputValue();
    num = [123456789],
        smallAlphabats = ["abcdefghijklmnopqrstuvwxyz"],
        captilAlphabats = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        symbols = ["!@#$%^&*()-_+"],
        password = num + smallAlphabats + captilAlphabats + symbols;
    if (!length) {
        alert("Enter length for password")
        return;
    } else {
        output.innerHTML = "";
        for (i = 0; i < length; i++) {
            output.innerHTML += password.charAt(Math.floor(Math.random() * password.length))
        }
    }
}
function stringToNum() {
    let inputhere = inputValue()
    if (!inputhere) {
        alert("Enter String number to convert it into Number")
        return;
    }
    let html = `The type of String is now Number and the number is ` + Number(inputhere)
    ShowOutput(html)
}
function fix() {
    let inputhere = Number(inputValue());
    if (!inputhere) {
        alert("Enter Number")
        return;
    }
    else {
        console.log(09);
        let html = "3 value is set in toFixed function " + inputhere.toFixed(3)
        ShowOutput(html)
    }
}
function GST() {
    let inputhere = Number(inputValue());
    if (!inputhere) {
        error("Enter Text for GST")
        return;
    }
    let html = `Net Amount =${(inputhere - (inputhere * (10 / 100))).toFixed(2)}<br>GST(10.0%)= ${(inputhere * (10 / 100)).toFixed(2)} <br> Gross Amount= ${inputhere} `
    ShowOutput(html)
}