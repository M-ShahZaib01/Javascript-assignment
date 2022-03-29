ClrOutput = () => {
    document.getElementById("output").innerHTML = "";
}
document.getElementById("clrInput").onclick = () => {

    document.getElementById("inputText").value = "";

}
const Hurrah = () => {
    return `<span style = \"color:green;\"><h3>Hurraaahhhh!...</b></span>`
}
const inputValue = () => {
    return document.getElementById("inputText").value;
}
const ShowOutput = (Output) => {
    document.getElementById("output").innerHTML = Output;
}
// let OriginalText1 = "I'm Learning Web & Mobile App Development";
// let OriginalText2 = "I love coding!";
// let OriginalText3 = "One Day I'll be a successful business man";
// document.getElementById("orignalTextBox").innerHTML=`${OriginalText1}`+"<br>"+`${OriginalText2}` + "<br>"+ `${OriginalText3}`
let OriginalText = `I'm Learning Web & Mobile App Development.<br>I love coding!</br>One Day I'll be a successful business man InShaAllah`
document.getElementById("orignalTextBox").innerHTML = OriginalText;

document.getElementById("findSum").onclick = () => {
    let a = parseInt(prompt("Enter First Number", 0));
    let b = parseInt(prompt("Enter second Number", 0))
    ClrOutput();
    // document.getElementById("output").innerHTML = `The Sum of ${a} and ${b} is: ${a + b}` + "</br>" + `
    // ${a} + ${b} = ${a + b} `;
    let SumOutput = `The Sum of ${a} and ${b} is: <span style =\"color: red;\"> ${a + b} </span> </br>  ${a} + ${b} = ${a + b} `;
    ShowOutput(SumOutput);
}


document.getElementById("findSub").onclick = () => {
    let a = parseInt(prompt("Enter First Number", 0));
    let b = parseInt(prompt("Enter second Number", 0))
    ClrOutput();
    // document.getElementById("output").innerHTML = `The Subtraction of ${a} and ${b} is: ${a - b}` + "</br>" + `
    // ${a} - ${b} = ${a - b} `;
    let subOutput = `The Subtraction of ${a} and ${b} is: <span style=\"color:red;\">${a - b}</span> <br> ${a} - ${b} = ${a - b}`;
    ShowOutput(subOutput);
}
document.getElementById("findMul").onclick = () => {
    let a = parseInt(prompt("Enter First Number", 0));
    let b = parseInt(prompt("Enter second Number", 0))
    ClrOutput();
    document.getElementById("output").innerHTML = `The Multiplication of ${a} and ${b} is: ${a * b}` + "</br>" + `
    ${a} x ${b} = ${a * b} `;
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
document.getElementById("findFact").onclick = () => {
    let a = parseInt(prompt("Enter Number for which you want the Factorial", 0));

    ClrOutput();
    let fact = 1;
    for (var i = a; i > 0; i--) {
        fact = fact * i;
    }
    document.getElementById("output").innerHTML += `Factorial of ${a} is: ${fact} `;

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
toCapitalze = (string) => {
    string = "<span style=\"text-transform: capitalize;\">" + string + "</span>"
    return string;

}
document.getElementById("toCap").onclick = () => {
    ClrOutput();
    let text = document.getElementById("inputText").value;
    if (!text == "") {
        text = toCapitalze(text);
        document.getElementById("output").innerHTML = text;
    }
    else {
        OriginalText = toCapitalze(OriginalText);
        document.getElementById("output").innerHTML = OriginalText;
    }

}

const cities = ["faisalabad", "lahore", "karachi", "islamabad"];

document.getElementById("printCities").onclick = () => {
    ClrOutput();
    cities.sort();
    cities.forEach(element => {
        element = toCapitalze(element);

        document.getElementById("output").innerHTML += `${element}</br>`
    });
    // for(var i = 0; i<cities.length; i++)
    // {
    //     console.log(cities[i]);
    // document.getElementById("output").innerHTML += `${cities[i]}</br>`
    // }
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
    }
}
document.getElementById("removeCity").onclick = () => {
    let city = prompt('Enter City Name to be removed')
    city = city.toLowerCase();
    cities.forEach(element => {
        element = element.toLowerCase();
    })
    let foundCity = cities.includes(city);
    console.log(foundCity);
    if (foundCity === true) {
        cities.pop(city)
        alert(`${city} Has been removed from the list!`);
    } else {
        alert(`Such a City '${city}' Not Found!`);
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

const UpdateCity = () => {

    let string = prompt('Enter City Name to Update!')
    string = string.toLowerCase();
    let indexOfCity = cities.indexOf(string)
    if (indexOfCity != -1) {
        let UpdateTo = prompt('Update with?')
        let foundCity = cities.includes(UpdateTo);
        console.log(foundCity);
        if (foundCity === true) {
            alert('This City Already exists!');
        } else {
            cities.splice(indexOfCity, 1, UpdateTo)
            alert('City has been Updated!')
        }
    }
    else {
        alert('Sorry such a City doesn\'t exists...!')
    }

}
document.getElementById("UpdateCity").onclick = UpdateCity;