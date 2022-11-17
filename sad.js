

const myform=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onsubmit);
userDetails.addEventListener('deletebtn',removeitem(emailinput.value));
function onsubmit(e)
{
    e.preventDefault();
    let userDetails={
        name:nameinput.value,
        email:emailinput.value
    }
    let myObj=JSON.stringify(userDetails)
    localStorage.setItem(emailinput.value,myObj);
    let obj1=JSON.parse(localStorage.getItem("call"));
    console.log(obj1);
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameinput.value} ${emailinput.value}`));
    userList.appendChild(li);
    var deletebtn=document.createElement('button');
    deletebtn.className='btn';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    var editbtn=document.createElement('button');
    editbtn.className='btn';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
}
function removeitem(emailinput)
{
    localStorage.removeItem(emailinput);
}



