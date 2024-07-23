//EventListener
var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  //   console.log("button clicked");
  //   document.getElementById("header-title").textContent = "Changed";
  //   document.querySelector("#main").computedStyleMap.backgroundColor = "#f4f4f4";
  //   console.log(e);

  console.log(e.target);
}
