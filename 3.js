//EVENTS
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   //   console.log("button clicked");
//   //   document.getElementById("header-title").textContent = "Changed";
//   //   document.querySelector("#main").computedStyleMap.backgroundColor = "#f4f4f4";
//   //   console.log(e);
//   // console.log(e);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
//   // var output = document.getElementById("output");
//   // output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   //   console.log(e.type);
//   //console.log(e.clientX); //(clientX) = position of the mouse on the X axis
//   // console.log(e.clientY); //(clientY) = position of the mouse on the Y axis
//   // console.log(e.offsetX);
//   // console.log(e.offsetY);
//   //checking if upon clicking the button you're holding down the click/control/shift key
//   // console.log(e.altKey);
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);

//   function runEvent(e) {
//     console.log("EVENT TYPE:" + e.type);
//   }
// }

// var button = document.getElementById("button");
// var box = document.getElementById("box");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

// function runEvent(e) {
//   console.log("EVENT TYPE: ", e.type);

//   output.innerHTML =
//     "<h3>MouseX: " + e.offsetX + " </h3><h3>MouseY: " + e.offsetY + " </h3>";

//   document.body.style.backgroundColor =
//     "rgb(" + e.offsetX + ", " + e.offsetY + "40)";
// }

// Selecting the input element of type "text"
var itemInput = document.querySelector('input[type="text"]');

// Selecting the form element
var form = document.querySelector("form");
itemInput.addEventListener("keydown", runEvent); // Adding an event listener to the input element that listens for the "keydown" event
itemInput.addEventListener("keyup", runEvent);

// Defining a function which will run when the "keydown" event is triggered
function runEvent(e) {
  // Logging the event type to the console
  console.log("EVENT TYPE: " + e.type);

  // Logging the current value of the input element to the console
  console.log(e.target.value);
  document.getElementById("output").innerHTML = // Displaying the current value of the input element in an element with the ID "output"
    "<h3>" + e.target.value + "</h3>";
}
