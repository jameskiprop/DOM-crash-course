// //Examine the document object

// //console.dir(Document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);

//GET ELEMENT BY ID//
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Add Items";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.innerText);
// headerTitle.style.border - bottom;
// ("solid 3px black");

//getElementByClassName//
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello James";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = "purple"; //gives a error

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "orange";
// }

//GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello James";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = "purple"; //gives a error

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "orange";
// }

//QUERYSELECTOR//
var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc ";

var input = document.querySelector("input");
input.value = "Hello Kiprop ";

var submit = document.querySelector('input[type = "submit"]');
submit.value = "send";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "purple";

//QUERYSELECTORALL//
var titles = document.querySelectorAll(".title");

console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}
