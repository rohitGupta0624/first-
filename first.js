var form = document.getElementById("addform");
var itemList = document.getElementById("items");
form.addEventListener("sumbit",addItem);
//itemList.addEventListener("click",removeItem)
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Append li to list
    itemList.appendChild(li);
  }