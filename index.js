

const todoDivMain = document.createElement('div')
todoDivMain.classList.add('flex', 'flex-col', 'gap-5')

const mainDiv = document.getElementById('main');
mainDiv.classList.add('flex', 'flex-col', 'gap-5')
const inputAndButton = document.createElement('div')
inputAndButton.classList.add('flex', 'flex-row', 'bg-gray-200', 'gap-3');
const inputTodo = document.createElement('input');



inputTodo.id = 'input';
inputTodo.placeholder = 'add todo'
inputTodo.classList.add('border-2', 'bg-gray-200', 'rounded-lg', 'border-black', 'h-15', 'w-50')


const addButton = document.createElement('button')

addButton.innerText = 'add todo'
addButton.classList.add('border-2', 'bg-gray-200', 'rounded-lg', 'border-black')

let todos = [{ name: 'i am going to complete the mysql', iscom: true }
    , { name: 'going to look for houses', iscom: false }];


addButton.onclick = () => {
    const todoname = inputTodo.value;
    todos.push({
        name: todoname,
        iscom: false
    });
    console.log(todos)

    todoDivMain.innerHTML = '';
    todos.map((names, key) => {
        todoDivMain.append(addTodoMain(names, key));
    })
}


function addTodoMain(name, key) {
    const upperTodo = document.createElement('div');
    upperTodo.classList.add('flex', 'flex-row', 'gap-5')
    const todoDiv = document.createElement('input');
    todoDiv.classList.add('bg-red-200', 'border-2', 'p-5', 'w-96')
    if (name.iscom === true) {
        todoDiv.classList.add('bg-green-400');
    }
    else {
        todoDiv.classList.add('bg-red-400');
    }
    todoDiv.value = name.name;

    const checkButton = document.createElement('button')
    checkButton.classList.add('border-2','rounded-lg', 'p-3')
    if (name.iscom === true) {
        checkButton.innerText = 'complete'
        checkButton.classList.add('bg-green-300')
    }
    else {
        checkButton.innerText = 'pending'
        checkButton.classList.add('bg-red-400')
    }

    checkButton.onclick = () => {
        todos[key].iscom = (!todos[key].iscom)
        console.log(todos[key].iscom)

        todoDivMain.innerHTML = '';
        todos.map((names, key) => {
            todoDivMain.append(addTodoMain(names, key));
        })
    }
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.classList.add('bg-red-300','rounded-lg', 'p-3')
    deleteButton.onclick = () => {
        todoDivMain.removeChild(upperTodo)
    }

    const updateButton = document.createElement('button');
    updateButton.innerText = 'update'
    updateButton.classList.add('bg-pink-400', 'rounded-lg', 'p-3')


    updateButton.onclick = ()=>{
        const name = todoDiv.value;
        alert(name)
        todos[key].name = name; 
    }



    upperTodo.append(todoDiv)
    upperTodo.append(checkButton)
    upperTodo.append(deleteButton)
    upperTodo.append(updateButton);
    return upperTodo;
}


todos.map((names, key) => {
    todoDivMain.append(addTodoMain(names, key));
})
















inputAndButton.append(inputTodo);
inputAndButton.append(addButton)

mainDiv.append(inputAndButton);
mainDiv.append(todoDivMain)
