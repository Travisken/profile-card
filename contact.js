const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  successMsg.style.display = 'none';

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    valid = false;
    document.getElementById('test-contact-error-name').textContent = 'Full name is required.';
  }

  if (!email) {
    valid = false;
    document.getElementById('test-contact-error-email').textContent = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    valid = false;
    document.getElementById('test-contact-error-email').textContent = 'Please enter a valid email address.';
  }

  if (!subject) {
    valid = false;
    document.getElementById('test-contact-error-subject').textContent = 'Subject is required.';
  }

  if (!message) {
    valid = false;
    document.getElementById('test-contact-error-message').textContent = 'Message is required.';
  } else if (message.length < 10) {
    valid = false;
    document.getElementById('test-contact-error-message').textContent = 'Message must be at least 10 characters.';
  }

  if (valid) {
    form.reset();
    successMsg.style.display = 'block';
  }
});
