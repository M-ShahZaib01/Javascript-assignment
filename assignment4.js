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

document.getElementById("toLower").onclick = () => {

    let text = document.getElementById("inputText").value;
    ClrOutput();
    if (!text == "") {
        text = text.toLowerCase();
        document.getElementById("output").innerHTML = text;
    } else {
        OriginalText = OriginalText.toLowerCase();
        document.getElementById("output").innerHTML = OriginalText;
    }
}
document.getElementById("toUpper").onclick = () => {
    ClrOutput();
    let text = document.getElementById("inputText").value;
    if (!text == "") {
        text = text.toUpperCase();
        document.getElementById("output").innerHTML = text;
    } else {
        OriginalText = OriginalText.toUpperCase();
        document.getElementById("output").innerHTML = OriginalText;

    }
}
toCapitalze = (string) => {
    string = "<span style=\"text-transform: capitalize;\">" + string + "</span>"
    return string;

}
document.getElementById("toCap").onclick = () => {
    ClrOutput();
    let text = document.getElementById("inputText").value;
    if (!text == "") {
        text = text.toLowerCase();
        text = toCapitalze(text);
        document.getElementById("output").innerHTML = text;
    }
    else {
        OriginalText = OriginalText.toLowerCase();
        OriginalText = toCapitalze(OriginalText);
        document.getElementById("output").innerHTML = OriginalText;
    }

}
document.getElementById("btrFormat").onclick = () => {
    ClrOutput();
    let text = document.getElementById("inputText").value;
    if (!text == "") {
        text = text.toLowerCase();
        text = toCapitalze(text);
        document.getElementById("output").innerHTML = text;
    }
    else {
        alert("Please fill out the input box.")
    }

}

const cities = ["faisalabad", "lahore", "karachi", "islamabad"];

document.getElementById("printCities").onclick = () => {
    ClrOutput();
    cities.sort();
    cities.forEach((element, index) => {
        element = toCapitalze(element);

        document.getElementById("output").innerHTML += `${index + 1} ${element}</br>`
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
document.getElementById("findCity").onclick = () => {
    let city = prompt('Enter City? ');
    city = city.toLowerCase();
    cities.forEach(element => {
        element = element.toLowerCase()
    });
    let foundCity = cities.indexOf(city);
    console.log(foundCity);
    if (foundCity != -1) {
        alert('City Found')
        let elementFound = cities[foundCity];
        elementFound = toCapitalze(elementFound);
        document.getElementById("output").innerHTML = `City ${elementFound} is Available in your List!`
    }
    else {
        alert('Not Such a City Exist In Your List')
    }
}
document.getElementById("findWord").onclick = () => {
    let string = OriginalText.toLowerCase();
    let inputText = inputValue();
    inputText = inputText.toLowerCase();
    let index = string.indexOf(inputText);
    if (!inputText) {
        alert("Please Enter Some text")
        return;
    }
    if (index !== -1) {

        let html = `<span style="color:green; font-size:23px;">This Word found Successfuly</span> <br>`
        console.log(html)
        ShowOutput(html);

    } else {
        let html = "This text in not in string"
        ShowOutput(html)
    }
}
document.getElementById("replace").onclick = () => {
    let string = OriginalText.toLowerCase();
    let inputText = inputValue();
    inputText = inputText.toLowerCase();
    if (!inputText) {
        alert("Please Enter Some text")
        return;
    }
    inputText = new RegExp(inputText, "g")
    let replacewith = prompt("Replace with")
    let final = string.replace(inputText, replacewith)
    ShowOutput(final)
}