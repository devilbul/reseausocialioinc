import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsPage } from '../pages/about/events';
import { CommentPage } from '../pages/comment/comment';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPage } from '../pages/feed/feed';
import { JsonDataProvider } from '../providers/json-data/json-data';
import { DetailPageModule } from "../pages/detail/detail.module";
import { IonicStorageModule } from "@ionic/storage";
import { DetaileventPageModule } from "../pages/detailevent/detailevent.module";
import { FirebaseDataProvider } from '../providers/firebase-data/firebase-data';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {Calendar} from "@ionic-native/calendar";

export const firebaseConfig = {
  apiKey: "AIzaSyCI4R9PWUqV8rCovvSG-xDsRSf0NAI2goU",
  authDomain: "ionicsocial-e0cdc.firebaseapp.com",
  databaseURL: "https://ionicsocial-e0cdc.firebaseio.com",
  projectId: "ionicsocial-e0cdc",
  storageBucket: "ionicsocial-e0cdc.appspot.com",
  messagingSenderId: "255177853631"
};

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    CommentPage,
    FeedPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    DetailPageModule,
    DetaileventPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    CommentPage,
    FeedPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JsonDataProvider,
    AngularFireDatabase,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDataProvider
  ]
})
export class AppModule {}
