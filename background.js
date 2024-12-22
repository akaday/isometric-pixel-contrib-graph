chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchGraphData') {
    // Handle the message to fetch graph data
    sendResponse({ data: 'Graph data' });
  }
});
