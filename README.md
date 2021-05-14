# Build One-on-One chat in your Angular app

Read the full tutorial here: [**>> Build one-on-one chat in your Angular app**](https://www.cometchat.com/tutorials/#)

This example shows How To Build One-on-One chat in your Angular app:

![One-on-One chat App](./screenshots/0.gif)
<figcaption>One-on-One Angular Chat App</figcaption>


## Technology
This demo uses:

* CometChat Pro 2.2.1
* CometChat Angular UI Kit
* Firebase
* Angular

## Running the demo

To run the demo follow these steps:

1. [Head to CometChat Pro and create an account](https://app.cometchat.com/signup)
2. From the [dashboard](https://app.cometchat.com/apps), add a new app called **"one-on-one-chat-app"**
3. Select this newly added app from the list.
4. From the Quick Start copy the **APP_ID, APP_REGION and AUTH_KEY**. These will be used later.
5. Navigate to the Users tab, and delete all the default users and groups leaving it clean **(very important)**.
6. Get the Angular CLI installed on your machine by entering this command on your terminal.
  ```sh
  npm install -g @angular/cli
  ```
7. Download the repository [here](https://github.com/Daltonic/angular-chat-app/archive/master.zip) or by running `git clone https://github.com/Daltonic/angular-chat-app.git` and open it in a code editor.
8. [Head to Firebase and create a new project](https://console.firebase.google.com)
9. Open the "environment.ts" and paste codes in the files as seen below.
  ```ts    
    import { firebaseConfig, cometChat } from './../../app.config'
    export const environment = {
    production: false,
    firebase: firebaseConfig,
    ...cometChat,
    };
  ```
10. Create a file called **app.config.ts** in the **src** folder of your project.
10. Import and inject your secret keys in the **app.config.ts** file containing your CometChat and Firebase in this manner.
  ```ts    
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: 'xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx',
    authDomain: 'xxx-xxx-xxx-xxx-xxx-xxx-xxx',
    databaseURL: 'xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx',
    projectId: 'xxx-xxx-xxx',
    storageBucket: 'xxx-xxx-xxx-xxx-xxx',
    messagingSenderId: 'xxx-xxx-xxx',
    appId: 'xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx',
    measurementId: 'xxx-xxx-xxx',
    };

    const cometChat = {
    APP_ID: 'xxx-xxx-xxx',
    AUTH_KEY: 'xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx',
    APP_REGION: 'xx',
    };

    export { firebaseConfig, cometChat }
  ```
11. Copy the same settings into the "environment.prod.ts" as well.
12. Make sure to exclude **app.config.ts** in your gitIgnore file from being exposed online.
13. Run the following command to install the CometChat SDK.

```sh
    npm install
    ng serve --open
```

Questions about running the demo? [Open an issue](https://github.com/Daltonic/angular-chat-app/issues). We're here to help ✌️


## Useful links

- 🏠 [CometChat Homepage](https://app.cometchat.com/signup)
- 🚀 [Create your free account](https://app.cometchat.com/apps)
- 📚 [Documentation](https://prodocs.cometchat.com)
- 👾 [GitHub](https://www.github.com/cometchat-pro)
- 🔥 [Firebase](https://console.firebase.google.com)
- 🔷 [Angular](https://angular.io)
<!-- - ✨ [Live Demo](https://clone-6fd6f.web.app/) -->