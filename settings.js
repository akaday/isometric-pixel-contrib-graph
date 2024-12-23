document.addEventListener('DOMContentLoaded', () => {
  loadUserPreferences();
});

function loadUserPreferences() {
  const pixelSize = localStorage.getItem('pixelSize') || '10';
  const selectedTheme = localStorage.getItem('selectedTheme') || 'default';
  const darkMode = localStorage.getItem('darkMode') === 'true';

  document.getElementById('pixelSizeInput').value = pixelSize;
  document.getElementById('themeSelect').value = selectedTheme;
  document.getElementById('darkModeToggle').checked = darkMode;
}

function saveUserPreferences() {
  const pixelSize = document.getElementById('pixelSizeInput').value;
  const selectedTheme = document.getElementById('themeSelect').value;
  const darkMode = document.getElementById('darkModeToggle').checked;

  localStorage.setItem('pixelSize', pixelSize);
  localStorage.setItem('selectedTheme', selectedTheme);
  localStorage.setItem('darkMode', darkMode);

  alert('Preferences saved!');
}
