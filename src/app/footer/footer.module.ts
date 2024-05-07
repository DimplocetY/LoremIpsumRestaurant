import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  providers: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
