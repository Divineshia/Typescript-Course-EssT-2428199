interface Todo {
    id:number;
    title:string;
    status:todoStatus;
    completedOn?:Date;
}
enum todoStatus {
    Done="done",
    InProgress="in-progress",
    Todo="todo"
}

    const todoItems :Todo[]=[
    { id: 1, title: "Learn HTML", status: todoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: todoStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status:todoStatus.Todo },
]

function addTodoItem(todo:string):Todo {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: todoStatus.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId <T extends { id: number} >(items:T[]):number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
