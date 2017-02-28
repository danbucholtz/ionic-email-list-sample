import { Component } from '@angular/core';

import { Email, EmailProvider } from './provider';

@Component({
  selector: 'page-home',
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>
        Dan's emails
      </ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <button ion-item detail-none *ngFor="let email of emails">
        <ion-icon ios="ios-star-outline" md="ios-star-outline" item-left *ngIf="!email.favorited" primary></ion-icon>
        <ion-icon class="yellow" ios="ios-star" md="ios-star" item-left *ngIf="email.favorited"></ion-icon>
        <p>{{email.sender}}</p>
        <h2>{{email.subject}}</h2>
        <p>{{email.body}}</p>
      </button>
    </ion-list>
  </ion-content>
  `
})
export class HomePage {

  public emails: Email[];
  constructor(public provider: EmailProvider) {
  }

  ionViewWillEnter() {
    this.emails = this.provider.getEmails();
  }
}
