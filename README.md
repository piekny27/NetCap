<a href="#" onclick="return false;"><img src="https://cdn.discordapp.com/attachments/975403202398797919/1060549808135356477/bran1.png" height="50" alt="NetCap_logo"></a>
<br><br>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"></a>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></a>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"></a>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"></a>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF"></a>

### An online store project based on Angular with Firebase authentication. <br>
This project was generated with <b>Angular CLI</b> version 15.0.4. <br>
The <b>Angular Material UI</b> (15.0.4) is used to build the front end. <br>
The <b>Tauri</b> is used for building desktop app version. 

## Installation

### Requirements:
- Installed node.js
- Configured Tauri framework - more information [here](https://tauri.app/v1/guides/getting-started/prerequisites)
- Code editor or IDE (which supports typescript, javascript, rust)

### Commands:
To install dependencies:
```
npm install
```
To run tauri:
```
npm run tauri dev
```

## Dev server
Invoke the tool on the command line through the `ng` executable.\
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Firebase configuration

If you would like connect to own firebase follow steps bellow:

In the `src` folder create a folder `environments`.\
Then create a file `environment.ts`. It is where the API key is stored.\
Add your own configuration by changing x values.
```
export const environment = {
  production: false,
  firebase: {
    apiKey: "xxxxxxxx-xxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxx",
    measurementId: "xxxxxxxxxxxxxxxx"
  }
};
```

Make sure that you have properly configured Firebase cloud.

## Gallery
<p align="center">
<a href="#" onclick="return false;"><img src="https://cdn.discordapp.com/attachments/975403202398797919/1066400442118054009/laptopstore.png" height="330" alt="NetCap_logo"></a>
</p>
<p align="center">
<a href="#" onclick="return false;"><img src="https://cdn.discordapp.com/attachments/975403202398797919/1066402902920417392/laptopstore2.png" height="330" alt="NetCap_logo"></a>
</p>
<p align="center">
<a href="#" onclick="return false;"><img src="https://cdn.discordapp.com/attachments/913059546275127306/1077535939708067921/image.png" height="330" alt="NetCap_logo"></a><br>
Tauri desktop
</p>

## Links

[Node.js](https://nodejs.org/)<br>
[Angular CLI](https://github.com/angular/angular-cli)<br>
[Angular Material](https://material.angular.io/)<br>
[Tauri 1.2](https://tauri.app/)
