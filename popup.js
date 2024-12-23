document.addEventListener('DOMContentLoaded', () => {
  fetchGraphData();
  applyUserPreferences();
  addExportEventListeners();
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
    if (day.streak > 1) {
      pixel.style.border = '2px solid red'; // Highlight streaks with a border
    }
    graphContainer.appendChild(pixel);
  });
}

function getColorForCount(count) {
  const theme = getSelectedTheme();
  if (theme) {
    if (count >= 8) return theme.high;
    if (count >= 6) return theme.mediumHigh;
    if (count >= 4) return theme.medium;
    if (count >= 2) return theme.low;
    return theme.none;
  }
  // Default color mapping
  if (count >= 8) return '#216e39';
  if (count >= 6) return '#30a14e';
  if (count >= 4) return '#40c463';
  if (count >= 2) return '#9be9a8';
  return '#ebedf0';
}

function getSelectedTheme() {
  const themes = {
    default: {
      high: '#216e39',
      mediumHigh: '#30a14e',
      medium: '#40c463',
      low: '#9be9a8',
      none: '#ebedf0'
    },
    dark: {
      high: '#0e4429',
      mediumHigh: '#006d32',
      medium: '#26a641',
      low: '#39d353',
      none: '#161b22'
    }
  };
  const selectedTheme = localStorage.getItem('selectedTheme') || 'default';
  return themes[selectedTheme];
}

function applyUserPreferences() {
  const pixelSize = localStorage.getItem('pixelSize') || '10px';
  const darkMode = localStorage.getItem('darkMode') === 'true';

  document.documentElement.style.setProperty('--pixel-size', pixelSize);
  if (darkMode) {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }
}

function saveUserPreferences() {
  const pixelSize = document.getElementById('pixelSizeInput').value;
  const selectedTheme = document.getElementById('themeSelect').value;
  const darkMode = document.getElementById('darkModeToggle').checked;

  localStorage.setItem('pixelSize', pixelSize);
  localStorage.setItem('selectedTheme', selectedTheme);
  localStorage.setItem('darkMode', darkMode);

  applyUserPreferences();
}

function addExportEventListeners() {
  document.getElementById('exportImageBtn').addEventListener('click', exportGraphAsImage);
  document.getElementById('exportGifBtn').addEventListener('click', exportGraphAsGif);
}

function exportGraphAsImage() {
  const canvas = document.getElementById('exportCanvas');
  const ctx = canvas.getContext('2d');
  const graphContainer = document.getElementById('graphContainer');
  const pixels = graphContainer.getElementsByClassName('pixel');

  canvas.width = graphContainer.offsetWidth;
  canvas.height = graphContainer.offsetHeight;

  Array.from(pixels).forEach(pixel => {
    const rect = pixel.getBoundingClientRect();
    ctx.fillStyle = pixel.style.backgroundColor;
    ctx.fillRect(rect.left, rect.top, rect.width, rect.height);
  });

  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'isometric-pixel-art.png';
  link.click();
}

function exportGraphAsGif() {
  const gif = new GIF({
    workers: 2,
    quality: 10
  });

  const canvas = document.getElementById('exportCanvas');
  const ctx = canvas.getContext('2d');
  const graphContainer = document.getElementById('graphContainer');
  const pixels = graphContainer.getElementsByClassName('pixel');

  canvas.width = graphContainer.offsetWidth;
  canvas.height = graphContainer.offsetHeight;

  Array.from(pixels).forEach(pixel => {
    const rect = pixel.getBoundingClientRect();
    ctx.fillStyle = pixel.style.backgroundColor;
    ctx.fillRect(rect.left, rect.top, rect.width, rect.height);
  });

  gif.addFrame(ctx, {copy: true});
  gif.on('finished', function(blob) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'isometric-pixel-art.gif';
    link.click();
  });

  gif.render();
}
