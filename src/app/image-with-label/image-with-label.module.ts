import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ImageWithLabelComponent } from './image-with-label.component';

@NgModule({
  declarations: [ImageWithLabelComponent],
  imports: [CommonModule, BrowserModule],
  providers: [ImageWithLabelComponent],
  exports: [ImageWithLabelComponent],
})
export class ImageWithLabelModule {}
