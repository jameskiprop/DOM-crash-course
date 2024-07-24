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

var button = document.getElementById("button");
button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

function runEvent(e) {
  console.log("EVENT TYPE:", " " + e.type);
}
