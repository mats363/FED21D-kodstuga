// Objekt med lista som property
let exampleObject = {
    name: "Victor",
    age: 30,
    likesJavascript: true,
    courses: [
        {
            name: "Frontendutveckling",
            yhp: 50
        }
    ]
}

// Hämta ut vädet ur listan i objektet:
console.log(exampleObject.courses[0].name)

// Lista med users
let users = [
    {
        name: "Victor",
        age: 30,
        likesJavascript: true
    }, {
        name: "Pelle",
        age: 33,
        likesJavascript: false
    },{
        name: "Kalle",
        age: 100,
        likesJavascript: true
    }
]

// Funktion för att rendera ut våra users på sidan (DOM-manipulation)
function renderNames() {
    
    // Loop för att iterera över samtliga users i vår lista
    for(let i = 0; i < users.length; i++) {

        // Vi plockar ut en user som har loopens iteration som index (i)
        let user = users[i]

        // Skapar ett element av typ h1 
        let headerElement = document.createElement("h1")

        // Skapar och fyller describeString till rätt innehåll beroende på booleanen likesJavascript.
        // Vi använder template-strings för att direkt kunna använda variabler och JS-kod i vår sträng.
        let describeString = ""

        if(user.likesJavascript) {
            describeString = `${user.name} är ${user.age} år gammal och gillar javascript`
        } else {
            describeString = `${user.name} är ${user.age} år gammal och gillar inte javascript`
        }

        // Sätter texten i vår h1 till describeString
        headerElement.innerText = describeString

        // Lägger till vår h1 till bodyn
        document.body.append(headerElement)
    }
    
}

// Kallar på funktionen för att rendera ut samtliga users. 
// Vi kommer åt users inuti funktionen då users är en global variabel.
renderNames()