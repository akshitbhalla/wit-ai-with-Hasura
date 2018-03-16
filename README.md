
![wit.ai](http://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2015/01/WitaiLogo304.jpg)


## Quick Overview

This is a Hasura project constructed to showcase wit.ai integration. 
The app takes input queries of the form "Restaurants in \[location\]" and extracts and displays the location entered.

## 1. React Native:

#### Features

The app uses the Hasura Auth microservice for handling user login and signup operations. Gifted Chat is the library used for rendering the interface and the Expo Text-to-Speech API for realtime voice output.

#### Setup

Make sure you have Node v6 or later installed. I strongly recommend using Yarn, or npm v4. Create React Native App does not currently work with npm v5 due to bugs in npm ([you can track the issue here](https://github.com/react-community/create-react-native-app/issues/233#issuecomment-305638103)). No Xcode or Android Studio installation is required.

```sh
$ cd react-native/
$ yarn install  # installs all dependencies as specified in package.json
.
.
.
$ yarn start
```

This will install all dependencies as specified in `package.json`:
```
"dependencies": {
    "@expo/vector-icons": "^6.2.0",
    "expo": "^22.0.0",
    "native-base": "^2.3.3",
    "react": "16.0.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-22.0.1.tar.gz",
    "react-native-gifted-chat": "https://github.com/FaridSafi/react-native-gifted-chat.git",
    "react-native-nav": "2.0.2"
  }
```

[Create-React-Native-App](https://facebook.github.io/react-native/docs/getting-started.html)

[NativeBase](https://docs.nativebase.io/) 

[Gifted Chat](http://gifted.chat/)


Install the [Expo](https://expo.io) app on your iOS or Android phone, and use the QR code in the terminal to open the app. Find the QR scanner in the Projects tab of the app.

If you're familiar with React Native already, you won't find any `ios` or `android` directories in this project, just JavaScript. Once this installation is done, there are some commands you can run in the project directory:

#### `npm start` or `yarn start`

Runs the app in development mode with an interactive prompt. To run it without a prompt, use the `--no-interactive` flag.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm run eject` or `yarn run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a **permanent** action. Please use a version control system, such as git, so you can revert back if necessary. An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.


#### Support and Contact

If you're having issues with this app or would like to request new features, reach out to me at [@akshitbhalla13](https://goo.gl/kMku1B) on Twitter. [Personal Website](https://akshitbhalla.co).



## 2. ReactJS

#### Features

Create-React-App is used as a starter kit for the web-app. 

The YouTube API is used for getting autocomplete data and Material UI is used for styling the interface.

Axios is used to make AJAX calls to the server.

#### Support and Contact

If you're having issues with this app or would like to request new features, reach out to Chamanth at or Debarghya at 

## 3. Python Flask

#### Features

For the backend, the user input is sent in the form of JSON data in the body of a POST request which is extracted and sent for analysis to the Wit.ai API. 

The response is stored, converted into JSON and sent back to the front end for rendering on the user's device.

#### Support and Contact

If you're having issues with this app or would like to request new features, reach out to Gurankas Singh at 
