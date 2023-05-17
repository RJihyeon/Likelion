function greeting(event) {
  event.preventDefault()//새로고침 방지 

  var greeting = document.getElementById("greeting")
  
  var nameInput = document.querySelector("#login-form input[type='text']")
  var name = nameInput.value

  greeting.innerText = 'Hello'+name

  greeting.classList.remove("hidden")

  var login = document.getElementById("login-form")
  login.classList.add("hidden")
  

};

var submission = document.getElementById("login-form")
submission.addEventListener("submit",greeting)