import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatProgressBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';

// Import the AngularFireModule and the AngularFireDatabaseModule
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';


// Define the firebase database configuration keys, get it from your Firebase application console
export const firebaseConfig = {
  apiKey: 'AIzaSyA5cSfPy8QoErJTptdHxhcpBQlN4PogYTw',
  authDomain: 'shrabik-smart-certificate.firebaseapp.com',
  databaseURL: 'https://shrabik-smart-certificate.firebaseio.com',
  projectId: 'shrabik-smart-certificate',
  storageBucket: 'shrabik-smart-certificate.appspot.com',
  messagingSenderId: '296622038511'
};

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
