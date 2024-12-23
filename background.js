chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchGraphData') {
    fetch('http://127.0.0.1:5000/api/data')
      .then(response => response.json())
      .then(data => {
        sendResponse({ data: data });
      })
      .catch(error => {
        console.error('Error fetching data from Flask server:', error);
        sendResponse({ data: null });
      });
    return true; // Keep the message channel open for sendResponse
  }
});
