const inp = document.getElementsByTagName('input');
const p = document.querySelector('.some-text');
const bnt = document.querySelector('.send-text');
let text = "";
function send() {
    for (let i = 0; i < inp.length; i++) {
        text += inp[i].value;
    }
    p.innerText = text;
}

bnt.addEventListener('click', send);