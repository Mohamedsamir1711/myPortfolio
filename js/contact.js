/**
 * Contact form validation and submission UI
 */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: {
      el: document.getElementById('name'),
      error: document.getElementById('name-error'),
      validate: (v) => (v.trim().length >= 2 ? '' : 'Name must be at least 2 characters'),
    },
    email: {
      el: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email',
    },
    subject: {
      el: document.getElementById('subject'),
      error: document.getElementById('subject-error'),
      validate: (v) => (v.trim().length >= 3 ? '' : 'Subject must be at least 3 characters'),
    },
    message: {
      el: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: (v) => (v.trim().length >= 10 ? '' : 'Message must be at least 10 characters'),
    },
  };

  const successEl = document.getElementById('form-success');

  function validateField(key) {
    const field = fields[key];
    const message = field.validate(field.el.value);
    field.error.textContent = message;
    field.el.classList.toggle('error', !!message);
    return !message;
  }

  Object.keys(fields).forEach((key) => {
    fields[key].el.addEventListener('blur', () => validateField(key));
    fields[key].el.addEventListener('input', () => {
      if (fields[key].el.classList.contains('error')) {
        validateField(key);
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isValid = Object.keys(fields).every((key) => validateField(key));
    if (!isValid) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    await new Promise((resolve) => setTimeout(resolve, 1500));

    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    form.reset();
    successEl.hidden = false;

    setTimeout(() => {
      successEl.hidden = true;
    }, 5000);
  });
})();
