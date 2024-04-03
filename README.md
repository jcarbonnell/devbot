# NEAR Dev Bot

## Your AI coding assistant on the Near Protocol.

Is built as a React application with TypeScript, a Flask backend to handle the github scraping funcitonality and a Near BOS frontend. Here's a breakdown of each file:

- package.json: Contains metadata about the project and its dependencies.\
- public/index.html: The main HTML template for the React application.\
- public/manifest.json: JSON file that provides metadata used when the web app is installed on a user's mobile device or desktop.\
- public/robots.txt: Specifies rules for web crawlers about which pages or files the crawler can or cannot request from the website.\
- requirements.txt: Specifies Python dependencies for the project.\
- src/App.css: CSS file containing styles for the components in the React application.\
- src/index.css: CSS file containing global styles applied to the entire application.\
- src/logo.svg: SVG image file used as a logo for the application.\
- src/react-app-env.d.ts: TypeScript declaration file for global types used in the React application.\
- src/reportWebVitals.ts: JavaScript file containing functions to report web vital metrics.\
- src/services/getTasks.ts: TypeScript file defining a function to fetch tasks from a social bridge API.\
- src/services/storeTasks.ts: TypeScript file defining a function to store tasks using a social bridge API.\
- src/setupTests.ts: JavaScript file containing setup for Jest tests.\
- tsconfig.json: TypeScript configuration file specifying compiler options for the project.\

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for deploying after build.
