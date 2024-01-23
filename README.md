# Collections Management Database System Client App

## Stack and Tooling

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en) & [NPM](https://www.npmjs.com/)
- [React](https://react.dev/), initiated with [create-react-app](https://github.com/facebook/create-react-app)
- [React Router](https://reactrouter.com/) for routing
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - Component primitives
- [Storybook](https://storybook.js.org/) - For developing components in isolation

## Getting started

- Download and install [Node.js](https://nodejs.org/) v21.6.1 or greater. This will include [NPM](https://www.npmjs.com/) (Node package manner) and cli
- cd into the project directory
- run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

Launches Storybook

## Component Primitives

This app uses [Shadcn/ui](https://ui.shadcn.com/) to build component primitives. These components are installed using the accompanying CLI:

```bash
npx shadcn-ui@latest add <componentName>
```

These components will be installed to `/src/lib/ui`, and then moved to a directory of the same name to encapsulate related files such as storybook stories or unit tests.
