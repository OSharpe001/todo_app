// BRING IN ELEMENTS FROM HTML
const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todos");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);
    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;
    todo?todoText = todo.text: null;
    // console.log(todoText);
    if (todoText) {
        const todoEL = document.createElement("li");
        if (todo && todo.completed) {
            todo.classList.add("completed");
        };

        // MAKE THE TEXT OF THE LIST ITEM THE SAME AS THE INPUT
        todoEL.innerText = todoText;

        // APPEND TODO LIST ITEM TO THE TODO UNORDERED LIST
        todoUL.appendChild(todoEL);

        // CLEAR OUT AFTER ENTRY
        input.value = "";

        // ADDING "COMPLETED" CLASS TO LIST ELEMENTS THAT WERE (LEFT) CLICKED
        todoEL.addEventListener("click", ()=> {
            todoEL.classList.toggle("completed");
        });

        // "CONTEXTMENU" IS BASICALLY THE RIGHT CLICK (OR "TWO-FINGER CLICK" ON TRACKPADS)
        todoEL.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            // REMOVE THE LIST ITEM
            todoEL.remove()
        })
    };
};