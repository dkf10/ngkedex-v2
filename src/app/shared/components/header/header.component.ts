import { Component } from '@angular/core';
import { mainMenu } from 'src/app/core/enum/routes.enum';

@Component({
  selector: 'ngkdx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly mainMenuRoute = mainMenu;
}
