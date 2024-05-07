import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, BrowserModule],
  providers: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule {}
