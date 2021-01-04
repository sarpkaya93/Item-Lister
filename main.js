var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  const newItem = document.getElementById('item').value;
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
 
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

  if(li.appendChild(document.createTextNode(newItem)).length === 0 ){
    itemList.appendChild(li).style.display='none';
    console.log(itemList.appendChild(li));
  }else{
    itemList.appendChild(li)
  }

}

itemList.addEventListener('click', removeItem);

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }  
}

filter.addEventListener('keyup', filterItems);

function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = document.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) !== -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}