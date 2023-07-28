import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './login/login.component';
import { AgeDirective } from './shared/age.directive';
import { HomeComponent } from './login/home/home.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgeDirective,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    //LoginComponent
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
