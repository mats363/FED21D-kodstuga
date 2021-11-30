document.getElementsByTagName("button")[0].addEventListener("click", saveToLS)

window.addEventListener("load", initSite)

function initSite() {
    renderTodos()
}

function getTodosFromLs() {
    let collectedTodoList = localStorage.getItem("todoList")

    let todoList = []

    if(collectedTodoList) {
        todoList = JSON.parse(collectedTodoList)
    } 

    return todoList
}

function saveToLS() {
    let newTodo = document.getElementsByTagName("input")[0].value

    let todoList = getTodosFromLs()
    todoList.push(newTodo)

    localStorage.setItem("todoList", JSON.stringify(todoList))

    renderTodos()
}

function removeTodo(todoToRemove) {

    let todoList = getTodosFromLs()

    let indexToRemove = todoList.findIndex((todo) => {
        return todo == todoToRemove
    })

    todoList.splice(indexToRemove, 1)
    localStorage.setItem("todoList", JSON.stringify(todoList))

    renderTodos()
}

function renderTodos() {
    let ul = document.getElementsByTagName("ul")[0]
    ul.innerHTML = ""

    let todoList = getTodosFromLs()

    for(let i = 0; i < todoList.length; i++) {
        let todo = todoList[i]

        let li = document.createElement("li")
        li.innerText = todo

        li.addEventListener("click", (event) => { removeTodo(todo) })

        ul.append(li)
    }

}
