import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './login/login.component';
import { AgeDirective } from './shared/age.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgeDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule
    //LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
