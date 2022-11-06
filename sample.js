const items=document.getElementsByClassName('list-group-item');
items[2].style.background='green';
for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
    items[i].style.color='red';
}
