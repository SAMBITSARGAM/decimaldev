So in this Guide we will be making a quick Electron app example!
For this you have to install the Electron Framework! 

```
npm i --save-dev electron
```
---

## Your Workspace

Your workspace should look something like this...

```
My Electron App
  |--package.json
  |--index.js
  |--index.html
```

---
## Setting up package.json

Your package.json should look like this:

```json
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "electron ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "electron": "^10.1.1"
  }
}
```

---
## Designing your App

Now actually electron makes a html file to an Desktop app so now create an app with **index.html** file

```html
<html>
  <head>
    <title>My Electron App</title>
  </head>

  <body>
    <font>Hello World!</font>
  </body>
</html>
```

---
## Setting up index.js

Then go to your main file **index.js**

Now lets start step by step by first starting with importing all important classes of Electron

```js
const { app, BrowserWindow, Menu } = require('electron')
```

Now make a simple function which will create the main window

```js
function createWindow () {
  // Defining the window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // Set nodeIntegration to true only if you are using node.js in the script tag of html file!

  // Load the html file which you want to convert into a Electron Desktop app
  win.loadFile('index.html')

  // Set to true if you want your Electron Desktop App to be reseized by the user...
  win.resizable = false
}
```

---
## Some Configurations

Now Electron will make a default application menu so incase if you don't want to have it so remove it by following code

```js
Menu.setApplicationMenu(null)
```

Now create the window when the app is ready to launch

```js
app.whenReady().then(createWindow)
```

---
## Running the app
Now after finishing this work time to run it! Do this in your Terminal...

```
npm start
```

Now it should display like this:

![Result of Electron App](https://cdn.glitch.com/1e5e278d-4135-41bc-9115-11844dfcb3b6%2F905cf352-c7c6-4770-ab0f-27b3897db4b2.image.png?v=1600181832237)


---
## To note
Now this is in **.js** format so if you want to make it as executable aka **.exe** file! We will be making a new guide for it or you can write and publish it in our GitHub Repo! Just join our Discord Server for more doubts...
