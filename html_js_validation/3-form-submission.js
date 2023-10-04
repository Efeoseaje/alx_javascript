// Function to handle form submission
function handleFormSubmit (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve form field values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageDisplay = document.getElementById('message');

  // Retrieve the values entered by the user
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  // Check if name and email fields are filled
  if (nameValue === '' || emailValue === '') {
    // Display an error message
    messageDisplay.textContent = 'Please fill in all required fields.';
    messageDisplay.style.color = 'red';
  } else {
    // Display a success message
    messageDisplay.textContent = 'Form submitted successfully!';
    messageDisplay.style.color = 'green';
  }
}

// Add an event listener to the form element to handle submission
const submitForm = document.getElementById('submitForm');
submitForm.addEventListener('submit', handleFormSubmit);
