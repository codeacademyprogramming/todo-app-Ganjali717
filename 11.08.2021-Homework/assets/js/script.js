const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const addTodoButton = document.querySelector('#add-todo-button');


// Helper functions
const clearInput = () => {
    todoInput.value = "";
}

const createListItem = todoObject => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center'
    listItem.innerHTML = `
        ${todoObject.text}
        <div>
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-success">Done</button>
            <button class="btn btn-warning">Edit</button>
        </div>
    `
    listItem.setAttribute('data-id', todoObject.id);
    todoList.append(listItem);

    // const removeButton = document.getElementsByClassName('btn-danger');
    // removeButton.addEventListener('click', function () {
    //     let index = todos.findIndex(x => {
    //         return x.id == this.id;
    //     });
    
    //     todoList.innerHTML = '';
    
        
    //     todos.splice(index, 1);
    //     todos.forEach((todo) => {
    //         createListItem(todo);
    //     });
    // });
}

const removeButton = document.getElementsByClassName('btn-danger');
//     removeButton.addEventListener('click', function () {
//        let index = todos.findIndex(x => {
//            return x.id == this.id;
//        })

//        todos.splice(index,1);
//     });


// Data
const todos = [
    {
        id: 0,
        text: 'first todo',
        status: 'NOT_COMPLETED'
    }
];
let initialId = 0   ;




todos.forEach((todo) => {
    createListItem(todo);
})

// Listeners
todoInput.addEventListener('keydown', function (e) {
    
    switch (e.key) {
        case 'Enter':
            const todoObject = {
                id: ++initialId,
                text: this.value,
                status: 'NOT_COMPLETED'
            }
            todos.push(todoObject);
            createListItem(todoObject);
            clearInput();
            break;
        default:
            break;
    }
});

addTodoButton.addEventListener('click', function () {
    const todoObject = {
        id: ++initialId,
        text: todoInput.value,
        status: 'NOT_COMPLETED'
    }
    createListItem(todoObject);
    clearInput();
});
