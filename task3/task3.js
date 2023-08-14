const addField = document.querySelector('.insert-text');
const list = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.all-delete-btn');
const listItems = document.querySelectorAll('li');

function createDeleteBtn() {
    for (let i = 0; i < listItems.length; i++) {
        const delBtn = document.createElement('button');
        delBtn.className = 'delete-button';
        delBtn.innerText = 'delete';
        listItems[i].appendChild(delBtn);
    }
}
function deleteItem() {
    createDeleteBtn();
    const del = document.querySelectorAll('.delete-button');
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function () {
            const elemet = this.parentElement;
            elemet.style.display = "none";
        });
    }
}
deleteItem();

function addItem() {
    const newLi = document.createElement('li');
    newLi.innerText = addField.value;
    list.append(newLi);
    addField.value = '';

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-button';
    delBtn.innerText = 'delete';
    newLi.appendChild(delBtn);

    const del = document.querySelectorAll('.delete-button');
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function () {
            const elemet = this.parentElement;
            elemet.style.display = "none";
        });
    }
}
addBtn.addEventListener('click', addItem);

function hideAll() {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.display = 'none';
    }
}
deleteBtn.addEventListener('click', hideAll);