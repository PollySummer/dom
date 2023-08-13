const receive = document.querySelector('.insert-text');
const list = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.delete-btn');

function addNewTask() {
    const newTask = document.createElement('li');
    newTask.innerText = receive.value;
    list.append(newTask);
}
addBtn.addEventListener('click', addNewTask);

function deleteTask() {
    let lis = document.querySelectorAll('li');
    for (let i = 0; li = lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
}
deleteBtn.addEventListener('click', deleteTask);