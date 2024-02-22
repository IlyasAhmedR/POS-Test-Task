import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
    // other components declarations
  ],
  imports: [
    AppRoutingModule ,
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
