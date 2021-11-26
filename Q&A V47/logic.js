

document.getElementsByTagName("button")[0].addEventListener("click", onclick)

function onclick(event) {
    console.log("I submit")
    let value = document.getElementsByTagName("input")[0].value
    document.body.innerHTML += value
}


document.getElementById("testClick").addEventListener("click", () => {console.log("test")})



/** 
 * Denna funktion ämnar att ta reda på ett index för uthämtning av data 
 * @param {number} index The number to raise.
*/

function calculateIndex(index) {

}

let list = [1, 2, 3, 4, 5, 4]

let users = [
    {
        name: "Victor",
        age: 30
    }, {
        name: "Johan",
        age: 34
    }, {
        name: "Kalle",
        age: 44
    }
]

// Plocka ut en specifik user med index
let user = users[0]

// Itterera över samtliga users
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name, users[i].age)
}

// Const
const testConst = { number: 1 }

// Manipulera poperty på const
testConst.number = 2

// Skapa ikon via JS med font awesome
let icon = document.createElement("i")
icon.className = "fab fa-affiliatetheme"

document.body.append(icon)

// Skapa box via document objeketet
let box = document.createElement("div")
box.innerText = "Hello"
document.body.append(box)

// Skapa box via innerHTMl 
document.body.innerHTML += `
    <div>
        Hello
    </div>
`;
