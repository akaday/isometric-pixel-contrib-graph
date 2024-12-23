chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchGraphData') {
    // Handle the message to fetch graph data
    sendResponse({ data: 'Graph data' });
  } else if (message.action === 'fetchAIAnalyzedGraphData') {
    // Handle the message to fetch AI-analyzed graph data
    fetchAIAnalyzedGraphData().then(data => {
      sendResponse({ data });
    }).catch(error => {
      console.error('Error fetching AI-analyzed graph data:', error);
      sendResponse({ error: 'Failed to fetch AI-analyzed graph data. Please try again later.' });
    });
    return true; // Indicates that the response will be sent asynchronously
  }
});

async function fetchAIAnalyzedGraphData() {
  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
      },
      body: JSON.stringify({
        prompt: 'Fetch GitHub contribution graph data',
        max_tokens: 100
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return parseAIResponse(data);
  } catch (error) {
    console.error('Error fetching AI-analyzed graph data:', error);
    throw error;
  }
}

function parseAIResponse(response) {
  try {
    // Extract relevant data from the AI API response
    const graphData = response.choices[0].text.trim().split('\n').map(line => {
      const [date, count] = line.split(',');
      return { date, count: parseInt(count, 10) };
    });
    return graphData;
  } catch (error) {
    console.error('Error parsing AI response:', error);
    throw error;
  }
}
