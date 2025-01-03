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

## New Feature: Highlighting Contribution Streaks and Milestones

This extension now includes a feature to highlight contribution streaks and milestones in your GitHub contribution graph. Here's how it works:

### Contribution Streaks

Contribution streaks are identified by checking consecutive days with contributions. The streaks are visually highlighted in the isometric pixel art graph by changing the color or adding a border around the streaks.

### Milestones

Milestones are significant points in your contribution history, such as reaching a certain number of contributions. These milestones are also highlighted in the graph to make them stand out.

### How to Use

1. Install the extension in your browser.
2. Open the extension popup to view your isometric pixel art contribution graph.
3. Contribution streaks and milestones will be automatically highlighted in the graph.

Enjoy tracking your progress and stay motivated with your contribution streaks and milestones!

## Exporting the Isometric Pixel Art Graph

This extension now includes functionality to export the isometric pixel art graph as an image or a GIF. Here's how you can use this feature:

### Export as Image

1. Open the extension popup to view your isometric pixel art contribution graph.
2. Click the "Export as Image" button.
3. The graph will be exported as a PNG image and downloaded to your device.

### Export as GIF

1. Open the extension popup to view your isometric pixel art contribution graph.
2. Click the "Export as GIF" button.
3. The graph will be exported as a GIF and downloaded to your device.

This feature allows you to easily share your isometric pixel art contribution graph with others or save it for future reference.
