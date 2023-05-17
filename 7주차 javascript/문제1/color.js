const message = document.getElementById("message")
message.innerText = "안녕하세요!"

function changeColor () {
  var selectElement = document.getElementById("colorSelect")
  var headingElement = document.getElementById("message")
  var selectedColor = selectElement.value ; 

  headingElement.style.color = selectedColor ; 
};

var selectElement = document.getElementById("colorSelect");
selectElement.addEventListener("change",changeColor);