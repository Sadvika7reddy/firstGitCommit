const items=document.querySelector('.list-group-item:nth-child(2)');
items.style.background='green';
const thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.remove();
const item=document.querySelectorAll('.list-group-item');
item[1].style.color='red';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.background='#f4f4f4';
}