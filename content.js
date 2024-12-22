async function fetchContributionGraphData() {
  try {
    const token = await new Promise((resolve, reject) => {
      chrome.storage.local.get('githubToken', (result) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(result.githubToken);
        }
      });
    });

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query {
            viewer {
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const contributionDays = data.data.viewer.contributionsCollection.contributionCalendar.weeks.flatMap(week => week.contributionDays);
    return contributionDays.map(day => ({
      date: day.date,
      count: day.contributionCount
    }));
  } catch (error) {
    console.error('Error fetching contribution graph data:', error);
    return [
      // Fallback data
      { date: '2021-01-01', count: 5 },
      { date: '2021-01-02', count: 3 },
      { date: '2021-01-03', count: 8 },
      // Add more fallback data points as needed
    ];
  }
}

function renderIsometricPixelArtGraph(data) {
  // Render the isometric pixel art version of the contribution graph
  // This is a placeholder function, you need to implement the actual rendering logic
  console.log('Rendering isometric pixel art graph with data:', data);
}

// Fetch the contribution graph data and render the isometric pixel art graph
fetchContributionGraphData().then(graphData => {
  renderIsometricPixelArtGraph(graphData);
});
