 var form=document.getElementById('addForm');
 var itemList=document.getElementById('items');
 var filter=document.getElementById('filter');
 form.addEventListener('submit', addItem);
 itemList.addEventListener('click',removeItem);
 filter.addEventListener('keyup',filterItems);
 function addItem(e)
 {
    e.preventDefault();
    console.log(1);
    var newItem=document.getElementById('item').value;
    var key=document.getElementById('item21').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(key));
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
 function filterItems(e)
 {
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    //var con=items.firstChild;
    //console.log(con);
    Array.from(items).forEach(function(item){
        var itemName=item.textContent;
        var con=item.children[1].textContent;
        console.log(con);
        if(itemName.toLowerCase().indexOf(text)!=-1||con.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }

    });
 }
