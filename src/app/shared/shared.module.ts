import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// Import other shared Angular Material modules

@NgModule({
  declarations: [
    // Declare shared components here
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class SharedModule { }
