document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('Email');
    const phoneNumber = document.getElementById('phonenumber');
    const password = document.querySelector('input[id="password"]');
    const confirmPassword = document.querySelector('input[id="password"]:nth-of-type(2)');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
    form.appendChild(submitButton);
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Clear previous error messages
      clearErrors();
  
      let valid = true;
  
      // Validate Full Name
      if (!fullname.value.trim() || fullname.value.trim().length < 5) {
        showError(fullname, 'Full Name must be at least 5 characters.');
        valid = false;
      }
  
      // Validate Email
      if (!email.value.trim() || !validateEmail(email.value.trim())) {
        showError(email, 'Enter a valid email address.');
        valid = false;
      }
  
      // Validate Phone Number
      if (!phoneNumber.value.trim() || phoneNumber.value.trim() === '123456789' || phoneNumber.value.trim().length !== 10) {
        showError(phoneNumber, 'Enter a valid 10-digit phone number.');
        valid = false;
      }
  
      // Validate Password
      const passwordValue = password.value.trim();
      if (!passwordValue || passwordValue.length < 8 || passwordValue.toLowerCase() === 'password' || passwordValue === fullname.value.trim()) {
        showError(password, 'Password must be at least 8 characters and cannot be "password" or your name.');
        valid = false;
      }
  
      // Validate Confirm Password
      if (!confirmPassword.value.trim() || confirmPassword.value.trim() !== passwordValue) {
        showError(confirmPassword, 'Passwords do not match.');
        valid = false;
      }
  
      if (valid) {
        // Submit the form if all validations are passed
        alert('Form submitted successfully!');
        form.submit();
      }
    });
  
    function showError(input, message) {
      const error = document.createElement('div');
      error.className = 'error';
      error.innerText = message;
      input.parentNode.appendChild(error);
    }
  
    function clearErrors() {
      const errors = document.querySelectorAll('.error');
      errors.forEach(function (error) {
        error.remove();
      });
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  