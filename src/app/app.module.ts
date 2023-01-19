import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';

import { AuthService } from "./services/auth-service/auth.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/dashboard/products/products/products.component';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from '././components/dashboard/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LaptopDetailsComponent } from './components/dashboard/products/laptop-details/laptop-details.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DialogLogoutComponent } from './components/dialog-logout/dialog-logout.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NotFoundComponent,
    LaptopDetailsComponent,
    UserProfileComponent,
    VerifyEmailComponent,
    DialogLogoutComponent,
    ProductsCardComponent,
  ],
  entryComponents: [
    DialogLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'NetCap'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    MatDialogModule,
    MatRippleModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
