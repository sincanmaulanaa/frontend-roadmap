// let itemList = document.querySelector("#items");

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

//parentElemet
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

//firstChild
//console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

//lastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "gray";

//createElement
// const newDiv = document.createElement("div");

//add class
// newDiv.className = "hello";

//add div
// newDiv.id = "hello1";

//add attribute
// newDiv.setAttribute("title", "Heloo Div");

//create textNode
// const newDivText = document.createTextNode("Hello World");

//add text to div
// newDiv.appendChild(newDivText);

//insertBefore
// const newListItem = document.createElement("li");
// const textNewListItem = document.createTextNode("Item 0");
// newListItem.className = "list-group-item";
// newListItem.appendChild(textNewListItem);
// itemList.insertBefore(newListItem, itemList.children[2]);

//EVENT TARGET
// const button = document.getElementById("button");

// button.addEventListener("click", buttonClick);

// function buttonClick(e) {
//   console.log("button clicked");
//   document.getElementById("header-title").textContent = "Changed";
//   document.querySelector("#main").style.backgroundColor = "#f4f4f4";

//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);

//   //   if (e.target.id === "button") {
//   //     button.textContent = "Clicked";
//   //   }

//   const output = document.getElementById("output");
//   output.innerHTML = "<h3>" + e.target.id + "</h3>";

//   console.log(e.type);

//   console.log(e.clientX);
//   console.log(e.clientY);

//   console.log(e.altKey);
// }

// const button = document.getElementById("button");
// const box = document.getElementById("box");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector("form");

// itemInput.addEventListener("keyup", runEvent);

// function runEvent(e) {
//   console.log("EVENT TYPE: " + e.type);
//   console.log(e.target.value);

//   document.getElementById("output").innerHTML =
//     "<h3>" + e.target.value + "</h3>";

//   let output = document.getElementById("output");
//   output.innerHTML =
//     "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";

//   document.body.style.backgroundColor =
//     "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
// }
