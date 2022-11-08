 var form=document.getElementById('addForm');
 var itemList=document.getElementById('items');
 form.addEventListener('submit', addItem);
 itemList.addEventListener('click',removeItem);
 function addItem(e)
 {
    e.preventDefault();
    console.log(1);
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemList.appendChild(li);
 }
 function removeItem(e)
 {
    if(e.target.classList.contains('delete'));
    {
        if(confirm('are you sure'));{
            var li=e.target.parentElement;
    itemList.removeChild(li);
 }
}
 }
