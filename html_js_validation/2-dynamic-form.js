// Function to generate dynamic input fields
function generateInputFields (num) {
  const inputContainer = document.getElementById('inputContainer');
  inputContainer.innerHTML = ''; // Clear existing fields

  for (let i = 1; i <= num; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'field' + i;
    input.placeholder = 'Field ' + i;
    inputContainer.appendChild(input);
  }
}

// Function to validate the form before submission
function validateForm (event) {
  event.preventDefault(); // Prevent the form from submitting by default

  const numFields = parseInt(document.getElementById('numFields').value);
  const inputContainer = document.getElementById('inputContainer');
  const inputs = inputContainer.getElementsByTagName('input');

  let isValid = true;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
      isValid = false;
      break; // Stop checking if any field is empty
    }
  }
  if (!isValid) {
    alert('Please fill in all fields');
  } else {
    // If all fields are filled, you can submit the form
    document.getElementById('dynamicForm').submit();
  }
}

// Event listener for dropdown change
document.getElementById('numFields').addEventListener('change', function () {
  const selectedValue = parseInt(this.value);
  generateInputFields(selectedValue);
});

// Event listener for form submission
document.getElementById('dynamicForm').addEventListener('submit', validateForm);
