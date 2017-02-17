import { Component, Input, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

export class Page {
  icon?: string;
  title: string;
  component: any;
}

@Component({
  selector: 'sidemenu',
  template: `<ion-menu [content]="content">
    <ion-content class="sidemenu">
      <ion-list no-lines>
        <ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">
          <ion-icon *ngIf="page.icon" [name]="page.icon" item-left></ion-icon>
          {{page.title}}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`,
  styles: [`.sidemenu {

  }`]
})
export class Ionic2Sidemenu {

  @Input()
  pages: Array<Page>;

  @Input()
  rootPage: any;

  @ViewChild(Nav) nav: Nav;

  constructor() {}

  openPage(page: Page) {
    this.nav.setRoot(page.component);
  }

}