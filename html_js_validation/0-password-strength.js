// Password validator

// Get the password Element
const passwordE = document.querySelector('#password');
// Get the error Element
const errorMessage = document.querySelector('#error');

const validatePassword = () => {
  let valid = false;

  const password = passwordE.value.trim();

  if (!isPasswordSecure(password)) {
    showError();
  } else {
    showSuccess();
    valid = true;
  }
  return valid;
};

const isPasswordSecure = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  return re.test(password);
};

const showError = () => {
  errorMessage.textContent = 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)';
};

const showSuccess = () => {
  errorMessage.textContent = '';
};

// Add an event listener to the form to validate password on submission
const passwordForm = document.querySelector('#passwordForm');
passwordForm.addEventListener('submit', (event) => {
  // validate password
  if (!validatePassword()) {
    // prevent the form from submitting if validation fails
    event.preventDefault();
  }
});
