// Hämta alla element

let saveBtn = document.getElementById("saveBtn");
let todoList = document.getElementById("todoList");

// Skapa en mock lista

//let todos = ["Skapa lilsta", "Skriv ut lista", "lägg till ny", "Klicka som klar"];
let todos = [];

// Skriva ut vår lista på sidan
function printList() {

    todoList.innerHTML = "";

    // Skapoa en lista
    let lista = document.createElement("ul");

    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
        let item = document.createElement("li");
        item.id = i;
        item.innerText = todos[i];
        lista.append(item);
    }
    todoList.append(lista)

}

// Lägg till ny item på listan

saveBtn.addEventListener("click", () => {

    let saveItem = document.getElementById("todoInput").value;
    console.log("Klick på knapp", );
    todos.push(saveItem);

    console.log(todos);

    document.getElementById("todoInput").value = "";

    printList();

})

// Ta bort en item ur listan

todoList.addEventListener("click", (evt) => {
    console.log("klick inne i listan", evt.target.id);

    // Kolla med if om event.target.id inte är null radera, annars gör inget
    todos.splice(evt.target.id,1);

    console.log("lista efter splice", todos);
    printList();
})

printList();