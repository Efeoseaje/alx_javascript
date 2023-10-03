// validate email

// get the email element
const emailE = document.querySelector('#email');

// get the error element
const errorMessage = document.querySelector('#error');

const validateEmail = () => {
  let valid = false;

  const email = emailE.value.trim();

  if (!isRequired(email)) {
    blankError();
  } else if (!isEmailValid(email)) {
    showError();
  } else {
    showSuccess();
    valid = true;
  }
  return valid;
};

const isRequired = (value) => value !== '';

const isEmailValid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const blankError = () => {
  errorMessage.textContent = 'Email cannot be blank';
};

const showError = () => {
  errorMessage.textContent = 'Please enter a valid email address';
};

const showSuccess = () => {
  errorMessage.textContent = '';
};

const emailForm = document.querySelector('#emailForm');
emailForm.addEventListener('submit', (event) => {
  // validate password
  if (!validateEmail()) {
    // prevent the form from submitting if validation fails
    event.preventDefault();
  }
});
