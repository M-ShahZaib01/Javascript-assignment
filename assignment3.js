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

document.getElementById("printName").onclick = () => {
    let name = prompt("Please Enter Your Name:")
    name = "Your Name is " + name;
    ClrOutput();
    ShowOutput(name);
}
toCapitalze = (string) => {
    string = "<span style=\"text-transform: capitalize;\">" + string + "</span>"
    return string;

}
const cities = ["faisalabad", "lahore", "karachi", "islamabad"];
document.getElementById("printCities").onclick = () => {
    ClrOutput();
    cities.sort();
    cities.forEach((element,index) => {
        element = toCapitalze(element);

        document.getElementById("output").innerHTML += `${index+1} ${element}</br>`
    });
}
document.getElementById("addCity").onclick = () => {
    let city = prompt('Enter City Name')
    city = city.toLowerCase();
    cities.forEach(element => {
        element = element.toLowerCase();
    })
    let foundCity = cities.includes(city);
    console.log(foundCity);
    if (foundCity === true) {
        alert('This City Already exists!');
    } else {
        cities.push(city)
        alert("City Added Succesfully")
    }
}
document.getElementById("findTable").onclick = () => {
    let a = parseInt(prompt("Enter Number for which you want the Table", 0));
    let b = parseInt(prompt("Table till?", 0))

    ClrOutput();
    for (var i = 0; i <= b; i++) {
        console.log(`${a} x ${i} = ${a * i}`);
        document.getElementById("output").innerHTML += `${a} x ${i} = ${a * i}` + "<br>"
    }

}