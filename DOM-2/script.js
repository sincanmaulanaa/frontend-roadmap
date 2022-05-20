//DOM SELECTION

//document.getElementById() return element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "pink";
judul.style.fontSize = "50px";
judul.style.textDecoration = "underline";

//document.getElementsByTagName() return HTML Collection
const paragrafs = document.getElementsByTagName("p");
for (let i = 0; i < paragrafs.length; i++) {
  paragrafs[i].style.backgroundColor = "green";
  if (paragrafs[3]) {
    paragrafs[2].style.backgroundColor = "red";
  }
}

//document.getElementsByClassName return HTML Collection
const p1 = document.getElementsByClassName("p1")[0];
p1.textContent = "Ini diubah dari javascript";

//document.querySelector() return element
const p4 = document.querySelector("#b p");

p4.style.backgroundColor = "pink";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "red";

//document.querySelectorAll() return nodeList
const p = document.querySelectorAll("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "pink";
}
