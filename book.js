const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate the name field
  const nameField = form.querySelector('input[name="name"]');
  if (nameField.value === '') {
    alert('Please enter your name.');
    return;
  }

  // Validate the email field
  const emailField = form.querySelector('input[name="email"]');
  if (emailField.value === '') {
    alert('Please enter your email address.');
    return;
  } else if (!emailField.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate the phone field
  const phoneField = form.querySelector('input[name="phone"]');
  if (phoneField.value === '') {
    alert('Please enter your phone number.');
    return;
  } else if (!phoneField.value.match(/^\d{10}$/)) {
    alert('Please enter a valid phone number.');
    return;
  }

  // Validate the date field
  const dateField = form.querySelector('input[name="date"]');
  if (dateField.value === '') {
    alert('Please enter a date.');
    return;
  }

  // Validate the time field
  const timeField = form.querySelector('input[name="time"]');
  if (timeField.value === '') {
    alert('Please enter a time.');
    return;
  }

  // Validate the service field
  const serviceField = form.querySelector('select[name="service"]');
  if (serviceField.value === '') {
    alert('Please select a service.');
    return;
  }

  // Validate the quantity field
  const quantityField = form.querySelector('input[name="services[service]"]');
  if (quantityField.value === '') {
    alert('Please enter a quantity.');
    return;
  } else if (quantityField.value < 1) {
    alert('Please enter a quantity of at least 1.');
    return;
  }

  // Submit the form if everything is valid
  form.submit();
});
