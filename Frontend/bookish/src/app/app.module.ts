import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { PreferencesComponent } from './preferences/preferences.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { MylistComponent } from './mylist/mylist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PreferencesComponent,
    HomeComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
