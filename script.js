console.log("Hej från JS!");

// var x = "Hej";

let x = "Hej";

const y = 10;

let klass = "FED21D";

let helloString = x + " " + klass + "!";

console.log(helloString);

// x += " på dig!"

let summa = x + y;

console.log("summa", summa);

console.log(x);

let z = true;

let root = document.getElementById("root");
// textBox.insertAdjacentHTML("afterbegin", helloString);
// textBox.innerHTML = helloString;

let fName = prompt("Hej vad heter du?");
let lName = prompt("Och i efternamn då?");

let userName = fName + " " + lName;

//alert("Hej du heter visst: " + userName)

console.log("userName", userName);

//root.insertAdjacentHTML("afterbegin", "<div class='userBox' id='user'>" + userName + "</div>");

document.getElementById("root").insertAdjacentHTML("afterbegin", "<div class='userBox' id='user'>" + userName + "</div>");

console.log(Array(16).join( 'hero'-1) + " Batman")