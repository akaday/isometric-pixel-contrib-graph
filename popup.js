document.addEventListener('DOMContentLoaded', () => {
  fetchGraphData();
  addRefreshButtonListener();
  addColorSchemeChangeListener();
});

function fetchGraphData() {
  chrome.runtime.sendMessage({ action: 'fetchGraphData' }, (response) => {
    if (response && response.data) {
      renderIsometricPixelArtGraph(response.data);
    }
  });
}

function renderIsometricPixelArtGraph(data) {
  const graphContainer = document.getElementById('graphContainer');
  graphContainer.innerHTML = ''; // Clear any existing content

  data.forEach((day) => {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = getColorForCount(day.count);
    pixel.title = `Date: ${day.date}, Count: ${day.count}`; // Add tooltip
    graphContainer.appendChild(pixel);
  });
}

function getColorForCount(count) {
  // Define color mapping based on contribution count
  if (count >= 8) return '#216e39';
  if (count >= 6) return '#30a14e';
  if (count >= 4) return '#40c463';
  if (count >= 2) return '#9be9a8';
  return '#ebedf0';
}

function addRefreshButtonListener() {
  const refreshButton = document.getElementById('refreshButton');
  if (refreshButton) {
    refreshButton.addEventListener('click', () => {
      fetchGraphData();
    });
  }
}

function addColorSchemeChangeListener() {
  const colorSchemeSelect = document.getElementById('colorSchemeSelect');
  if (colorSchemeSelect) {
    colorSchemeSelect.addEventListener('change', (event) => {
      const selectedScheme = event.target.value;
      updateColorScheme(selectedScheme);
    });
  }
}

function updateColorScheme(scheme) {
  // Update the color scheme based on the selected value
  // This is a placeholder function, you need to implement the actual logic
  console.log('Updating color scheme to:', scheme);
}
