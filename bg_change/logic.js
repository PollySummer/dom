const btn2 = document.querySelector('.btn-2');
const bgBody = document.querySelector('body');
const input = document.querySelector('#clr-request');
function changeBackground() {
    bgBody.style.backgroundColor = input.value;
}
btn2.addEventListener('click', changeBackground);