const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const errorMsg = document.querySelector(".password-error");

form.addEventListener("submit", e => {
  if (password.value !== confirmPassword.value) {
    errorMsg.textContent = "* Passwords do not match";
    password.classList.add(".error");
    confirmPassword.classList.add(".error");
  }
});
