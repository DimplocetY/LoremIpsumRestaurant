import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuBannerComponent } from './menu-banner.component';

@NgModule({
  declarations: [MenuBannerComponent],
  imports: [CommonModule, BrowserModule],
  providers: [MenuBannerComponent],
  exports: [MenuBannerComponent],
})
export class MenuBannerModule {}
