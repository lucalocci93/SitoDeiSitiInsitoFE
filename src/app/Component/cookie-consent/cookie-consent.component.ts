import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/Services/Common/common.service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent implements OnInit {
  consent: string | null = null;

  constructor(private common : CommonService) {}

  ngOnInit(): void {
    this.consent = this.common.getStorage('cookieConsent');
  }

  handleAccept(): void {
    this.common.setStorage('cookieConsent', 'accepted');
    this.consent = 'accepted';
  }

  handleDecline(): void {
    this.common.setStorage('cookieConsent', 'declined');
    this.consent = 'declined';
  }
}
