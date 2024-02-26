const form = document.querySelector("#form");
let username = form.elements.username.value;
let password = form.elements.password.value;
const msg = document.querySelector("span");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("commit the form");
  username = form.elements.username.value;
  password = form.elements.password.value;

  if (username === "Danie" && password === "CodeForFun") {
    console.log("login success");
    document.querySelector("#form").submit();
  } else {
    msg.style.visibility = "visible";
  }
});
