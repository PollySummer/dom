const inp = document.querySelector('.input-clr');
const p = document.querySelector('.some-text');
const bnt = document.querySelector('.send-text');
function send(){
    p.innerText=inp.value;
}

bnt.addEventListener('click', send);