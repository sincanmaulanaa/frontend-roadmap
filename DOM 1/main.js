const form = document.getElementById("add-form");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItems);

// addItem
function addItem(e) {
  e.preventDefault();

  //g et input value
  const newItem = document.getElementById("item").value;

  // create new li element
  let li = document.createElement("li");

  // add className
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  let deleteButton = document.createElement("button");

  // add classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";

  // append text node
  deleteButton.appendChild(document.createTextNode("X"));

  //append button to li
  li.appendChild(deleteButton);

  // append li to list
  itemList.appendChild(li);
}

// remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;

      itemList.removeChild(li);
    }
  }
}

// filter items
function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();

  // get list
  let items = itemList.getElementsByTagName("li");

  // convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
