document.addEventListener('DOMContentLoaded', () => {
  loadUserPreferences();
});

function loadUserPreferences() {
  fetch('http://127.0.0.1:5000/api/user-preferences')
    .then(response => response.json())
    .then(data => {
      const pixelSize = data.pixelSize || '10';
      const selectedTheme = data.selectedTheme || 'default';
      const darkMode = data.darkMode === 'true';

      document.getElementById('pixelSizeInput').value = pixelSize;
      document.getElementById('themeSelect').value = selectedTheme;
      document.getElementById('darkModeToggle').checked = darkMode;
    })
    .catch(error => {
      console.error('Error fetching user preferences:', error);
    });
}

function saveUserPreferences() {
  const pixelSize = document.getElementById('pixelSizeInput').value;
  const selectedTheme = document.getElementById('themeSelect').value;
  const darkMode = document.getElementById('darkModeToggle').checked;

  const preferences = {
    pixelSize: pixelSize,
    selectedTheme: selectedTheme,
    darkMode: darkMode
  };

  fetch('http://127.0.0.1:5000/api/user-preferences', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(preferences)
  })
    .then(response => response.json())
    .then(data => {
      alert('Preferences saved!');
    })
    .catch(error => {
      console.error('Error saving user preferences:', error);
    });
}
