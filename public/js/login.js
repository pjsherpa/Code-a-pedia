const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("FIND THIS", username, password);
    if (response.ok) {
      console.log("response", response);
      document.location.replace("/dashboard");
    } else {
      console.error();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to login",
      });
    }
  }
};
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);