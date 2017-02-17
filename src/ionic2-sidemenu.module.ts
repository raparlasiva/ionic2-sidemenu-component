import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';

import { Ionic2Sidemenu, Page } from './ionic2-sidemenu';

@NgModule({
  declarations: [
    Ionic2Sidemenu
  ],
  exports: [
    Ionic2Sidemenu
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Ionic2SidemenuModule {}