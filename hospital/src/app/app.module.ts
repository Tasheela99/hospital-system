import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      "apiKey": "AIzaSyC030mS2nD6E3h8V3QFlDUuAGxXk4UVxGg",
      "authDomain": "hospital-1e43e.firebaseapp.com",
      "projectId": "hospital-1e43e",
      "storageBucket": "hospital-1e43e.appspot.com",
      "messagingSenderId": "711002545832",
      "appId": "1:711002545832:web:32aae6822aa196e7b96c9d"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireAuthModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    CarouselModule,


  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
