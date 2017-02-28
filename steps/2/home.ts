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
      <ion-item *ngFor="let email of emails">
        {{email.subject}}
      </ion-item>
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
