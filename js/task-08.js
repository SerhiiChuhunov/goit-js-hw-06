const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert('All fields must be filled!!!')
  }
  const currentValues = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  console.log(currentValues);
  event.currentTarget.reset();
});

