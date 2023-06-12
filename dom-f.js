var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//Form - Submit Event
form.addEventListener('submit',addItem);


//ItemList - Click Event
itemList.addEventListener('click',removeItem);


//Filter - Keyup Event
filter.addEventListener('keyup',filterItems);


//Function addItem
function addItem(e){
    e.preventDefault();


//Input as item
var newItem=document.getElementById('item').value;
//Print description beside text
var description=document.getElementById('description').value;

//Create new li Element
var li=document.createElement('li');
//class name
li.className='list-group-item';

//Text Node
li.appendChild(document.createTextNode(newItem));
//Print description in list along with text
li.appendChild(document.createTextNode(description));

//Create Delete Button
var deleteBtn=document.createElement('button');
//Class Name
deleteBtn.className='btn btn-danger btn-sm float-right delete';
//Text Node
deleteBtn.appendChild(document.createTextNode('X'));

//Append Button to li
li.appendChild(deleteBtn);
//Append li to item list
itemList.appendChild(li);

//Create Delete Button
var deleteBtn=document.createElement('button');
//Class Name
deleteBtn.className='btn btn-primary btn-sm float-right delete';
//Text Node
deleteBtn.appendChild(document.createTextNode('Edit'));

//Append Button to li
li.appendChild(deleteBtn);
//Append li to item list
itemList.appendChild(li);
}

//Function removeItem
function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}
}

//Function filterItem
function filterItems(e){
    //convert to lower case
    var text=e.target.value.toLowerCase();
    //Get li elements
    var items=itemList.getElementsByTagName('li');
    //Convert to Array
    Array.from(items).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        //get description while searching
        var d=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || d.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}