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
document.getElementById("alrtName").onclick = () => {

    alert("Shahzaib Rajpoot")
    let html = `alert("Shahzaib Rajpoot")`
    ClrOutput();
    ClrOrgTxt();
    originalText(html)
}
document.getElementById("alrtNum").onclick = () => {

    alert(6512)
    let html = `alert(6512)`
    ClrOutput();
    ClrOrgTxt();
    originalText(html)
}
document.getElementById("showVariableName").onclick = () => {
    ClrOutput();
    let html = `<ul style = " text-align: left;" ><li>A variable Name can't contain any space.</li> <li> A variable Name can contain only latters, numbers, doller signs, and  underscorse. </li> <li>Though a variable name can't be any of javaScript's keywords, it can conatin keywords. For Example <span  style='color:red;'>userAlert</span> and<span  style='color:red;'> myvar</span> are legal.</li><li>Captal letters are fine,but be careful. Variable names are case sanstive.A <span  style='color:red;'>Rose</span> is not a <span style='color:red;'> rose </span>. if you assign the string 'floribundas' to the varable rose, and than ask JavaScript for the value assigned to <span style='color:red;' >Rose</span> ,you'll come up empty.</li></ul>`
    ClrOrgTxt();
    ShowOutput(html)
}
document.getElementById("sumTwoNum").onclick = () => {
    let a = 3;
    let b = 4;
    sum = a + b;
    ShowOutput(sum);
    let html = `let a = 3;<br>
                let b = 4;<br>
                sum = a+b;`
    ClrOrgTxt();
    originalText(html)
}
document.getElementById("subTwoNum").onclick = () => {
    let a = 3;
    let b = 4;
    sub = a - b;
    ShowOutput(sub);
    let html = `let a = 3;<br>
                let b = 4;<br>
                sub = a-b;`
                ClrOrgTxt();
    originalText(html)
}
document.getElementById("divTwoNum").onclick = () => {
    let a = 3;
    let b = 4;
    div = a / b;
    ShowOutput(div);
    let html = `let a = 3;<br>
                let b = 4;<br>
                div = a/b;`

                ClrOrgTxt();
       originalText(html)
}
document.getElementById("mulTwoNum").onclick = () => {
    let a = 3;
    let b = 4;
    mul = a * b;
    ShowOutput(mul);
    let html = `let a = 3;<br>
                let b = 4;<br>
                mul = a*b;`
    ClrOrgTxt();

    originalText(html)
}


document.getElementById("camlCase").onclick = () => {
    let html = `myName<br>myAge<br>userName<br>lastName`
    ClrOrgTxt();
    ShowOutput(html)
}
document.getElementById("calcSomeNum").onclick = () => {

    let calc = 2+3-(8*30)/34;
    ClrOutput();
    ShowOutput(calc);
    let html = ` let calc = 2+3-(8*30)/34`
    ClrOrgTxt();
    originalText(html)
    console.log("working");
}