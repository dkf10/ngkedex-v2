import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
const { version: appVersion } = require('../../../../../../package.json');

@Component({
  selector: 'ngkdx-about',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class AboutLandingComponent {
  public readonly appVersion = appVersion;
  public licenseText: string;
  public isLicenseModalOpen: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/assets/license/gnu-gpl.txt', { responseType: 'text' }).subscribe((data) =>
      this.licenseText = data
    );
  }

  public openLicenseModal(event: MouseEvent): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.isLicenseModalOpen = true
  }
}
