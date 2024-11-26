/**
 * External dependencies.
 */
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
emailjs.init('yTgHslW5Em4hKw3nv'); // Replace with your EmailJS Public Key

// Select the form and create UI elements for feedback
const form = document.getElementById('contactForm');

// Create a loader element (hidden by default)
const loader = document.createElement('div');
loader.classList.add('form-loader');
loader.style.display = 'none';


form.insertAdjacentElement('afterend', loader);

// Add a submit event listener to the form
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('contact_email').value.trim();
  const phone = document.getElementById('contact_phone').value.trim();
  const message = document.getElementById('contact_message').value.trim();

  // Clear any previous error messages
  const existingError = document.querySelector('.error-message');
  if (existingError) existingError.remove();

  // Validate required fields
  if (!name || !email || !message) {
	showError('Моля, попълнете всички задължителни полета!');
	return;
  }

  // Display the loader
  loader.style.display = 'flex';

  // Prepare email data
  const formData = {
	name: name,
	email: email,
	phone: phone,
	message: message,
  };

  try {
	// Send email using EmailJS
	const response = await emailjs.send('service_s9wlwau', 'template_j5ocm7x', formData);

	// Hide the loader and show success message
	loader.style.display = 'none';

	showSuccess('Получихме заявката ви!');

	form.reset(); // Reset the form after successful submission
  } catch (error) {
	// Hide the loader and show error message
	loader.style.display = 'none';

	console.error('Error sending email:', error);
	
	showError('Грешка в сървъра. Моля, опитайте отново!');
  }
});

// Function to show an error message
function showError(message) {
  const errorMessage = document.createElement('div');
  errorMessage.textContent = message;
  errorMessage.className = 'error-message';
  form.insertAdjacentElement('beforebegin', errorMessage);
}

// Function to show a success message
function showSuccess(message) {
  const successMessage = document.createElement('div');
  successMessage.textContent = message;
  successMessage.className = 'success-message';
  form.insertAdjacentElement('beforebegin', successMessage);

  // Automatically remove success message after 5 seconds
  setTimeout(() => {
	successMessage.remove();
  }, 5000);
}
