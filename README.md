<a href="#" onclick="return false;"><img src="https://cdn.discordapp.com/attachments/975403202398797919/1060549808135356477/bran1.png" height="50" alt="NetCap_logo"></a>
<br><br>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></a>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"></a>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></a>
<a href="#" onclick="return false;"><img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"></a>

### An online store project based on Angular with Firebase authentication. <br>
This project was generated with Angular CLI version 15.0.4.

## Installation

### Requirements:
- Installed node.js
- Code editor or IDE (which supports typescript, javascript)

### Commands:
```
npm install
npm install -g @angular/cli
npm install firebase @angular/fire
```
if you are using powershell use 
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Dev server
Invoke the tool on the command line through the `ng` executable.\
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Firebase configuration

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
Import and register firebase modules in `app.module.ts`.
```
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ]
})
```

## Links

[Node.js](https://nodejs.org/)<br>
[Angular CLI](https://github.com/angular/angular-cli)<br>
[NG Bootstrap](https://ng-bootstrap.github.io/#/home)<br>

