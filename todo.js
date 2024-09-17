
async function fetchData() {
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await promise.json();
    const datas = data.splice(0, 10);
    localStorage.setItem('datas', JSON.stringify(datas));
    return datas;
};

(function getTodo() {

    let datas = localStorage.getItem('datas');
    datas = JSON.parse(datas);
    

    console.log(datas);
    const mainDiv = document.getElementById('main');
    const getData = document.createElement('button');
    getData.innerText = 'get random todo data from API';
    getData.onclick = () => {
        getData.style.backgroundColor = 'green';
        getData.innerText = 'data fetched'
        fetchData().then(() => {
            location.reload();
        });

    }




    // add todo

    const todoDiv = document.createElement('div');
    todoDiv.style.border = "1px solid #000";
    todoDiv.style.margin = "10px";
    todoDiv.style.padding = "10px";
    todoDiv.style.backgroundColor = 'gray'
    todoDiv.id = "tododiv";
    const todoInput = document.createElement('input');
    todoInput.id = "todo adder";
    todoInput.style.width = '200px';
    todoInput.style.height = '30px';
    todoInput.style.marginBottom = '10px';
    todoInput.placeholder = 'add todo here';






    const addButton = document.createElement('button');
    addButton.innerText = 'add todo';

    addButton.onclick = () => {
        const Title = todoInput.value;
        const Id = getRandomInt(1000);
        const uid = getRandomInt(1000);
        datas.push({
            completed: false,
            id: Id,
            title: Title,
            userId: uid
        })
        alert('new todo added!!')
        localStorage.setItem('datas', JSON.stringify(datas));
        location.reload();

        // console.log(JSON.parse(datas))
    }
    todoDiv.append(addButton);
    todoDiv.append(todoInput);
    mainDiv.append(todoDiv);

    mainDiv.append(getData);

    datas.map((elem, idx) => {
        const perTodo = document.createElement('div');
        perTodo.id = "div" + idx;
        perTodo.style.border = "1px solid #000";
        perTodo.style.margin = "10px";
        perTodo.style.padding = "10px";
        const { userId, id, title, completed } = elem;
        console.log(userId);
        if (completed === true) {
            perTodo.style.backgroundColor = 'cyan'
        }
        else {
            perTodo.style.backgroundColor = 'red'
        }
        perTodo.innerHTML = `
          <p><strong>User ID:</strong> ${userId}</p>
          <p><strong>ID:</strong> ${id}</p>
        `;

        const newInput = document.createElement('input');
        newInput.style.width = '300px'
        newInput.style.height = '50px'
        newInput.id = 'input' + idx;
        newInput.value = title;


        const newPara = document.createElement('p')
        if (completed) {
            newPara.style.backgroundColor = 'cyan';
            newPara.innerText = 'Compeleted';
            newPara.id = 'com' + idx;
        }
        else {
            newPara.style.backgroundColor = 'red';
            newPara.innerText = 'isNOtCompleted';
            newPara.id = 'com' + idx;
        }
        const newcheck = document.createElement('input')
        newcheck.type = 'checkbox';
        newcheck.id = 'check' + idx;
        newcheck.onclick = () => {
            if (newcheck.checked) {
                perTodo.style.backgroundColor = 'cyan'
                const com = document.getElementById('com' + idx);
                com.innerText = 'Compeleted'
                com.style.backgroundColor = 'cyan';
            }
            else {
                perTodo.style.backgroundColor = 'red'
                const com = document.getElementById('com' + idx);
                com.innerText = 'IsNotCompleted'
                com.style.backgroundColor = 'red';
            }
            elem.completed = newcheck.checked;

            localStorage.setItem('datas', JSON.stringify(datas));
            // console.log("check box clicked");

        }
        if (completed) {
            newcheck.checked = true;
        }

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "delete";
        deleteButton.onclick = () => {
            mainDiv.removeChild(perTodo)

            //find idx
            const findIdx = datas.findIndex(todo => todo.id === elem.id);
            if (findIdx > -1) {
                datas.splice(findIdx, 1);
            }

            localStorage.setItem('datas', JSON.stringify(datas));
            let temp = localStorage.getItem('datas');
            temp = JSON.parse(temp);
            console.log(temp);
        }

        const update = document.createElement('button')
        update.innerText = 'update';

        update.onclick = () => {
            const inputText = newInput.value;
            console.log(inputText);
            elem.title = inputText;
            localStorage.setItem('datas', JSON.stringify(datas));
            console.log(datas);
            // console.log(elem)
        }
        //console.log(elem);

        perTodo.append(newInput);

        perTodo.append(update)
        console.log(newcheck.checked);
        perTodo.append(deleteButton);
        perTodo.append(newPara);
        perTodo.append(newcheck);

        // console.log(perTodo)
        // console.log(mainDiv);
        mainDiv.append(perTodo);

    })





})()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
