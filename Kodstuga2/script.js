// IF-satser:
let firstname = "Victor";

if(firstname == "Victor") {
    console.log("Lärare")
} else if(firstname == "Kalle") {
    console.log("Rektor")
} else {
    console.log("Studerande")
}

if(1 === "1") {
    console.log("Matchning på datatyp")
} else if (1 == "1"){
    console.log("Ej matchning på datatyp")
}

if(10 <= 20) {
    console.log("10 är mindre eller lika med 20");
}

let text = "def4567";
if(text != "abc1234") {
    console.log("text matchar inte..");
}

let bool = true
if((( 1 + 1 == 2) || false) && bool) {
    console.log("Villkor slutar alltid i sant eller falskt!");
}

// DOM-manipulation
let username = "Victor"
let password = "abc123"

let main = document.getElementById("root");

let container = document.createElement("div")

// Adding header to container
let header = document.createElement("h1")
header.innerText = "Hello world!"
header.className = "myHeader"
container.append(header)

// Adding username-input
let usernameInput = document.createElement("input")
usernameInput.placeholder = "Användarnamn"
usernameInput.id = "usernameInput"

// Adding password-input
let passwordInput = document.createElement("input")
passwordInput.placeholder = "Lösenord"
passwordInput.type = "password"
passwordInput.id = "passwordInput"

// Adding button for logging text
let button = document.createElement("button")
button.innerText = "Logga text!"
button.addEventListener("click", login)

main.append(container, usernameInput, passwordInput, button)

// This function authenticates the user and logs in
function login() {
    console.log("Vi har tryckt på knappen!")
    let usernameInput = document.getElementById("usernameInput").value
    let passwordInput = document.getElementById("passwordInput").value

    if(usernameInput == username && passwordInput == password) {
        console.log("Du är inloggad!")
    } else {
        console.log("Du har angett fel uppgifter, var god försök igen 😕")
    }
    console.log("username: " + username, "password: " + password)
}

// Functions 
function getFullNameString(firstname, lastname) {
    let fullname = firstname + " " + lastname
    console.log(fullname)
    return fullname
}

let name = getFullNameString("Victor", "Olsson")