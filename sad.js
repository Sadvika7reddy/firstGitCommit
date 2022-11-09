

const myform=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
myform.addEventListener('submit',onsubmit);
function onsubmit(e)
{
    e.preventDefault();
    let userDetails={
        name:nameinput.value,
        email:emailinput.value
    }
    let myObj=JSON.stringify(userDetails)
    localStorage.setItem('call',myObj);
    let obj1=JSON.parse(localStorage.getItem("call"));
    console.log(obj1);
}
