import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageBannerComponent } from './homepage-banner.component';

@NgModule({
  declarations: [HomepageBannerComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  providers: [HomepageBannerComponent],
  exports: [HomepageBannerComponent],
})
export class HomepageBannerModule {}
