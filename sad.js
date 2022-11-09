

const myform=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
myform.addEventListener('submit',onsubmit);
function onsubmit(e)
{
    e.preventDefault();
    localStorage.setItem('name1',nameinput.value,'name2',emailinput.value);
}
