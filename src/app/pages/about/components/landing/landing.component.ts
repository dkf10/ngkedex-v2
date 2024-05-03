import { Component } from '@angular/core';
const { version: appVersion } = require('../../../../../../package.json')

@Component({
  selector: 'ngkdx-about',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class AboutLandingComponent {
  public readonly appVersion = appVersion;
}
