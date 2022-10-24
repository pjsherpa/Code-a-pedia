const loginFormHandler = async (event) => {
  event.preventDefault();
  const usernameEl = document.querySelector("#username-login");
  const passwordEl = document.querySelector("#password-login");
  if (usernameEl && passwordEl) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("FIND THIS", usernameEl.value, passwordEl.value);
    if (response.ok) {
      console.log("response", response);
      document.location.replace("/dashboard");
    } else {
      console.error();
      Swal.fire({
        icon: "error",
        title: "Failed to login: wrong username or password",
      });
    }
  }
};
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
