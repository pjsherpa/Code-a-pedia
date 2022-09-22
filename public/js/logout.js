const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  document.onload(() => {
    if (localStorage.getItem('loggedIn')) {
        localStorage.removeItem('loggedIn');
        Swal.fire(
            'You have successfully logged in!',
            'Happy learning!',
            'success'
          );
    }
  })