document.addEventListener('DOMContentLoaded', () => {
  loadUserPreferences();
});

function loadUserPreferences() {
  const pixelSize = localStorage.getItem('pixelSize') || '10';
  const selectedTheme = localStorage.getItem('selectedTheme') || 'default';
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const aiIntegration = localStorage.getItem('aiIntegration') === 'true';

  document.getElementById('pixelSizeInput').value = pixelSize;
  document.getElementById('themeSelect').value = selectedTheme;
  document.getElementById('darkModeToggle').checked = darkMode;
  document.getElementById('aiIntegrationToggle').checked = aiIntegration;
}

function saveUserPreferences() {
  const pixelSize = document.getElementById('pixelSizeInput').value;
  const selectedTheme = document.getElementById('themeSelect').value;
  const darkMode = document.getElementById('darkModeToggle').checked;
  const aiIntegration = document.getElementById('aiIntegrationToggle').checked;

  localStorage.setItem('pixelSize', pixelSize);
  localStorage.setItem('selectedTheme', selectedTheme);
  localStorage.setItem('darkMode', darkMode);
  localStorage.setItem('aiIntegration', aiIntegration);

  alert('Preferences saved!');
}
