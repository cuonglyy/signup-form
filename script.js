const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const errorMsg = document.querySelector(".password-error");

form.addEventListener("submit", e => {
  if (password.value !== confirmPassword.value) {
    //Prevents the form from being submitted
    e.preventDefault();

    password.classList.add("error");
    confirmPassword.classList.add("error")
    errorMsg.style.display = "block";
  }
});
