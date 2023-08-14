const input = document.querySelectorAll('.insert-text');
const btn = document.querySelector('.show-text');
const bgBody = document.querySelector('body');

btn.addEventListener('click', function () {
    for (let i = 0; i < input.length; i++) {
        const text = document.createElement('p');
        text.className = 'written-text';
        text.innerText = input[i].value;
        bgBody.append(text);
        input.value = '';
    }
});