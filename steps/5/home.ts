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
      <ion-item-sliding *ngFor="let email of emails">
        <button ion-item detail-none  (click)="email.favorited = !email.favorited">
          <ion-icon ios="ios-star-outline" md="ios-star-outline" item-left *ngIf="!email.favorited" primary></ion-icon>
          <ion-icon class="yellow" ios="ios-star" md="ios-star" item-left *ngIf="email.favorited"></ion-icon>
          <p>{{email.sender}}</p>
          <h2>{{email.subject}}</h2>
          <p>{{email.body}}</p>
        </button>
        <ion-item-options side="left">
          <button ion-button color="primary" (click)="archiveEmail(email)">
            <ion-icon name="archive"></ion-icon>
            Archive
          </button>
        </ion-item-options>
        <ion-item-options side="right">
          <button ion-button color="danger" (click)="deleteEmail(email)">
            <ion-icon name="trash"></ion-icon>
            Delete
          </button>
        </ion-item-options>
      </ion-item-sliding>
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

  archiveEmail(inEmail: Email) {
    this.emails = this.emails.filter(email => email !== inEmail);
  }

  deleteEmail(inEmail: Email) {
    this.emails = this.emails.filter(email => email !== inEmail);
  }
}
