import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cookie-consent',
    templateUrl: './cookie-consent.component.html',
    styleUrls: ['./cookie-consent.component.css'],
    standalone: false
})
export class CookieConsentComponent implements OnInit {
  consent: string | null = null;

  ngOnInit(): void {
    this.consent = localStorage.getItem('cookieConsent');
  }

  handleAccept(): void {
    localStorage.setItem('cookieConsent', 'accepted');
    this.consent = 'accepted';
  }

  handleDecline(): void {
    localStorage.setItem('cookieConsent', 'declined');
    this.consent = 'declined';
  }
}
