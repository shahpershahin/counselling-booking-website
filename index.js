
    // Get the "Book Appointment" button element
    const button = document.querySelector('button');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Prevent the form from submitting
      event.preventDefault();

      // Create a new element to display the message
      const message = document.createElement('div');
      message.classList.add('message');
      message.innerHTML = 'Appointment booked!';

      // Append the message element to the body of the document
      document.body.appendChild(message);

      // Remove the message element after 3 seconds
      setTimeout(() => {
        message.remove();
      }, 3000);

      // Refresh the page
      window.location.reload();
    });
