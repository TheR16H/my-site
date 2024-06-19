const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if the user has a theme preference saved in localStorage
const savedTheme = localStorage.getItem('theme');
body.classList.toggle(savedTheme || 'light');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Save the user's theme preference in localStorage
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});
themeToggle.classList.toggle(savedTheme === 'dark' ? 'moon' : 'sun');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Toggle button icon between sun and moon
  themeToggle.classList.toggle('sun');
  themeToggle.classList.toggle('moon');

  // Save the user's theme preference in localStorage
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');