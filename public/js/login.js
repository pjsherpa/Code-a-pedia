const loginFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-login").value.trim();
  const passwordEl = document.querySelector("#password-login").value.trim();

  if (usernameEl && passwordEl) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("response", response);
      document.location.replace("/dashboard");
    } else {
      console.error();
      alert("Failed to login");
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Failed to login",
      // });
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
