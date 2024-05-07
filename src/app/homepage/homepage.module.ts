import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageBannerModule } from '../homepage-banner/homepage-banner.module';
import { ImageWithLabelModule } from '../image-with-label/image-with-label.module';
import { MenuBannerModule } from '../menu-banner/menu-banner.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HomepageBannerModule,
    MenuBannerModule,
    ImageWithLabelModule,
  ],
  providers: [HomepageComponent],
  exports: [HomepageComponent],
})
export class HomepageModule {}
