document.addEventListener("DOMContentLoaded", () => {

  // =============== EMAIL VALIDATION ===============
  function validateEmails() {
    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirm_email");
    const emailError = document.getElementById("email_error");
    const confirmEmailError = document.getElementById("confirm_email_error");

    const emailVal = email.value.trim();
    const confirmVal = confirmEmail.value.trim();

    // Reset
    email.classList.remove("has-error");
    confirmEmail.classList.remove("has-error");
    emailError.textContent = "";
    confirmEmailError.textContent = "";
    emailError.classList.remove("visible");
    confirmEmailError.classList.remove("visible");

    if (emailVal === "" || confirmVal === "") return false;

    // If mismatch
    if (emailVal !== confirmVal) {
      confirmEmail.classList.add("has-error");
      confirmEmailError.textContent = "Emails must match.";
      confirmEmailError.classList.add("visible");
      return false;
    }

    return true;
  }

  // =============== PASSWORD VALIDATION ===============
  function validatePasswords() {
    const pass = document.getElementById("password");
    const confirmPass = document.getElementById("confirm_password");
    const passError = document.getElementById("password_error");
    const confirmPassError = document.getElementById("confirm_password_error");

    const passVal = pass.value.trim();
    const confirmVal = confirmPass.value.trim();

    // Reset
    pass.classList.remove("has-error");
    confirmPass.classList.remove("has-error");
    passError.textContent = "";
    confirmPassError.textContent = "";
    passError.classList.remove("visible");
    confirmPassError.classList.remove("visible");

    if (passVal === "" || confirmVal === "") return false;

    if (passVal.length < 6) {
      pass.classList.add("has-error");
      passError.textContent = "Password must be at least 6 characters.";
      passError.classList.add("visible");
      return false;
    }

    if (passVal !== confirmVal) {
      confirmPass.classList.add("has-error");
      confirmPassError.textContent = "Passwords must match.";
      confirmPassError.classList.add("visible");
      return false;
    }

    return true;
  }

  // =============== ATTACH EVENT LISTENERS ===============
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirm_email");
  const pass = document.getElementById("password");
  const confirmPass = document.getElementById("confirm_password");

  if (email && confirmEmail) {
    email.addEventListener("input", validateEmails);
    confirmEmail.addEventListener("input", validateEmails);
  }

  if (pass && confirmPass) {
    pass.addEventListener("input", validatePasswords);
    confirmPass.addEventListener("input", validatePasswords);
  }

});
