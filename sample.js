 //const itemlist=document.querySelector('#items');
 //console.log(itemlist.parentNode);
 //itemlist.parentNode.style.background='#f4f4f4';
 //console.log(itemlist.parentElement);
 //console.log(itemlist.children);
 //itemlist.children[1].style.color='red';
 //console.log(itemlist.firstChild);
 //console.log(itemlist.firstElementChild);
 //console.log(itemlist.lastElementChild);
 //itemlist.lastElementChild.textContent='hello';
 //console.log(itemlist.nextSibling);
 //console.log(itemlist.previousElementSibling);
 var newDiv=document.createElement('ul');
 newDiv.className='hello';
 newDiv.id='hello1';
 newDiv.setAttribute('tittle','hello div');
var newDivText=document.createTextNode('hello world');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

 console.log(newDiv);
 container.insertBefore(newDiv,h1);
 parentNode=document.getElementById('items');
 const hello=<li>hello world</li>
 parentNode.appendFirstChild(hello);
 //parentNode.innerhtml='<li>item 1</li><li>item 2</li><li>item 3</li>';
 //parentNode.innerhtml='<li>hello world</li>'+parentNode.innerhtml;






