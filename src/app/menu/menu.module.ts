import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, BrowserModule],
  providers: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
