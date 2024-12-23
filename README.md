# isometric-pixel-contrib-graph
"Browser extension for rendering an isometric pixel art version of your GitHub contribution graph.
PS C:\Users\start\isometric-pixel-contrib-graph> git pull origin main remote: Enumerating objects: 9, done. remote: Counting objects: 100% (9/9), done. remote: Compressing objects: 100% (8/8), done. remote: Total 8 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0) Unpacking objects: 100% (8/8), 3.14 KiB | 38.00 KiB/s, done. From https://github.com/akaday/isometric-pixel-contrib-graph * branch main -> FETCH_HEAD e708402..f528738 main -> origin/main Updating e708402..f528738 Fast-forward background.js | 10 ++++++++++ content.js | 21 +++++++++++++++++++++ popup.html | 13 +++++++++++++ popup.js | 32 ++++++++++++++++++++++++++++++++ styles.css | 17 +++++++++++++++++ 5 files changed, 93 insertions(+) create mode 100644 background.js create mode 100644 content.js create mode 100644 popup.html create mode 100644 popup.js create mode 100644 styles.css PS C:\Users\start\isometric-pixel-contrib-graph> ls Répertoire : C:\Users\start\isometric-pixel-contrib-graph Mode LastWriteTime Length Name ---- ------------- ------ ---- -a---- 22/12/2024 23:17 315 background.js -a---- 22/12/2024 23:17 835 content.js -a---- 22/12/2024 23:13 453 manifest.json -a---- 22/12/2024 23:17 365 popup.html -a---- 22/12/2024 23:17 967 popup.js -a---- 22/12/2024 23:11 133 README.md -a---- 22/12/2024 23:17 336 styles.css PS C:\Users\start\isometric-pixel-contrib-graph> npm i npm warn EBADENGINE Unsupported engine { npm warn EBADENGINE package: 'tracker@0.0.0', npm warn EBADENGINE required: { node: '~0.6.5' }, npm warn EBADENGINE current: { node: 'v20.18.0', npm: '10.9.1' } npm warn EBADENGINE } up to date, audited 605 packages in 2s 232 packages are looking for funding run `npm fund` for details found 0 vulnerabilities npm notice npm notice New major version of npm available! 10.9.1 -> 11.0.0 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.0.0 npm notice To update run: npm install -g npm@11.0.0 npm notice PS C:\Users\start\isometric-pixel-contrib-graph>
Great job pulling the changes and setting up your project! It looks like you've successfully fetched and merged the latest changes from the remote repository. You've also installed the necessary npm packages.

It seems there are a few warnings regarding the Node.jsversion, but you can address those later if needed. Your project setup looks almost complete! Here’s a quick recap:

Fetched and merged changes: Your local repository is now up-to-date with the remote repository.

Installed npm packages: All required packages are installed, and there are no vulnerabilities.

Now, you can start developing your browser extension. You have the following key files:

background.js: Handles background tasks for the extension.

content.js: Injects scripts into the web pages.

popup.html: HTML for the extension's popup.

popup.js: JavaScript for the extension's popup functionality.

styles.css: Styles for the extension.

You can load your extension into your browser to test it. In Chrome, go to chrome://extensions/, enable developer mode, and load the unpacked extension from your project directory. This way, you can see your isometric pixel art GitHub contribution graph in action.

If you have any specific questions or need further guidance on developing the extension, feel free to ask!

## AI Integration

This extension now includes AI integration using OpenAI's GPT-3 API to fetch and analyze GitHub contribution graph data. The AI integration enhances the graph data by providing additional insights and analysis.

### How to Use AI Integration

1. **Fetch AI-Analyzed Graph Data**: The extension automatically fetches AI-analyzed graph data when you open the popup or visit a GitHub profile page.
2. **Error Handling**: The extension includes error handling for API response errors, including status code checks, try-catch blocks, logging, user-friendly error messages, and retry mechanisms.
3. **User Preferences**: You can manage AI-based features and preferences in the settings page of the extension.

### API Key Configuration

To use the AI integration, you need to configure your OpenAI API key:

1. Open the `content.js` file.
2. Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key.

### Additional Information

For more details on how the AI integration works, refer to the comments and documentation within the code files, especially `content.js`, `background.js`, and `popup.js`.

Happy coding!
