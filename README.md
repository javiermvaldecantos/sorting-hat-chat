# sorting-hat-chat
Web application inspired on the Pottermore Sorting Hat Quiz that uses a chat to display the questions. After answering all the questions, the Sorting Hat will tell you the house you belong to!

---

# How to build and run the app
This project was created using [Create React App](https://github.com/facebook/create-react-app). Refer to the previous link for detailed information about that tool.

To build or run the project, you need to have the following installed:
- [Node.js and npm](https://nodejs.org/en/download/). Recommended version is the latest LTS version (14.18.0 as of October 2021).
- [Yarn package manager](https://yarnpkg.com/getting-started/install).

## Running the app in development mode
Follow these steps:
1. Go to the project root directory
2. Run `yarn` to install all the necessary dependencies
3. Run `yarn start` to run the app in development mode. Then open Open [http://localhost:3000](http://localhost:3000) to view it in the browser (a new tab should open automatically). During development mode, the app will update on the go as you make edits to the code.

## Building the app for production
Follow these steps:
1. Go to the project root directory
2. Run `yarn` to install all the necessary dependencies (in case you haven't done it already)
3. Run `yarn build`. With this command, a production version of the app will be created, optimized for performance. The production code will be placed inside the `build` folder. If you want to deploy the app, see the [deployment section](https://facebook.github.io/create-react-app/docs/deployment) of Create React App for more information.

---

# Notes for future contributions
These are some notes to help future contributors, including general guidelines, the project structure, and some possible improvements that can be done.

## General guidelines for contributors
1. **Respect the project structure** (described on next section). This helps the project be maintainable.
2. **Make things modular**. If you try to make the project structure bigger or more complex, try to create new independent modules like the ones that are created already (`/src/data`, `/src/helper`, etc.). Independent modules are easier to test, use and maintain. For example, if you want to make calls to an API, all these calls should be managed by a new module (`/src/service` would be a good place for it).
3. **Don't rely on third-party libraries**. Try to develop new features only using libraries that the project already uses (React, Material-UI). The more libraries a project uses, the harder it is to maintain accross time.
4. **Use semantic names for functions and variables, and comment unclear code**. Semantic names make the code easy to understand, even without comments. But in case there is code that looks unclear to you, make sure to place a comment beside it to help other contributors.

## Project structure
The project root folder has the following structure:

    /node_modules   -->   Contains the project libraries, it is managed by package.json
    /public         -->   Contains assets including the entry point of the app (index.html)
    /src            -->   Contains the source code of the project (more information below)
    .gitignore
    package.json    -->   Used to manage packages
    README.md
    yarn.lock       -->   Used by yarn to manage packages

Of all the contents of the root folder, the most important one is `/src`. It is likely that you will only need to modify code inside this folder to add new features to the app.

### `/src` folder content
The `/src` folder is structured in modules (subfolders) that have a unique and independent functionality. Let's see its content in detail.

#### `/src/components`
This folder contains React components organized into folders. React components in this project are built using the [Material UI library](https://mui.com/). Check their website for more information.

Each component folder should generally contain an index.js file, the component file, and a style file. This way the style and functionality of the component are separated.

#### `/src/data`
This folder contains JSON data used in the app. As of October 2021 it only contains the questions asked by the sorting hat, and a shorter version (`shorter_questions.json`) that is helpful for developing code and debugging.

#### `/src/helper`
This folder contains helper files that can be used throughout the project. As of October 2021 it only contains a `utils.js` file, but it is a good place for other helper files. For example, if the app becomes multilingual in the future, the multi-language functionality could be managed by a `multilang.js` file placed in this folder.

#### `/src/hooks`
This file contains custom [React hooks](https://reactjs.org/docs/hooks-intro.html) to be used in React components. Instructions on how to build custom hooks can be found [in this link](https://reactjs.org/docs/hooks-custom.html).

#### `/src/images`
This folder contains images used by the app components.

#### `/src/styles`
This folder contains ***global*** style files, such as the theme of the app and a global CSS file. ***Important: Do not place specific style files in this folder***. Style files that contain specific rules for components should be placed in the appropriate component folder inside `/src/components`.

#### Other files inside `/src`
The rest of the files inside `/src` are:

    App.test.js          -->   Sample test file, it's a good starting point to make unit tests
    index.js             -->   JavaScript Entry point of the app
    reportWebVitals.js   -->   Used to measure performance
    setupTests.js        -->   Used to execute unit tests


## Possible improvements
Some possible improvements are:
1. **Improving the way of getting the user's input**. Right now, a text input is use to gather the answers, which are all numeric. Other input methods should be considered (a select input, multiple buttons, etc.).
2. **Making the UI more friendly**. This could be achieved by small changes that make the app more fun to use. For example, placing a picture of the sorting hat on the top bar, and making it move slightly when the hat is sending messages to the user.
3. **Improving the chat**. The chat could be improved in different ways. For example, the time the Sorting Hat takes to send messages could variate based on the messages length, to make the experience more realistic. Another improvement could be showing a "New messages" indicator if the user scrolled up the chat and there are new messages.