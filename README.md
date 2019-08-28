# Readme

#### To create a list of files, you'll need to install `tree`, with `brew install tree`

#### To generate a working slider, you'll need to:

1. Go to the selected media folder and type: `tree -Jf > ../../src/media.js` to generate JSON list of files in directories

2. Add `module.exports = ` to the beginning of the `media.js` file (so the module exports the whole Array of Objects)

3. Change directories in `/src/config.js` to match your media directory.<br>
Example: if your folder's in `/public/media`, type `../media/`

#### Notice: the media directory has to be max. 2 levels deep

#### Notice: sample directory with data is added to repo `/public/media`

#### Notice: you can change the default background image placeholder for videos in `/src/config.js`

## Available Scripts

In the project directory, you can run:

### `npm install` or `yarn`

Installs the project's dependencies

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build` or `yarn build run`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
