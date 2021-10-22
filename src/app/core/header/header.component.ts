import { Component } from '@angular/core';
import { IMenuData } from '../models/menu-data.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  state = 'close';

  menu: IMenuData[] = [
    {
      label: 'home',
      route: '/home'
    },
    {
      label: 'times',
      route: '/times'
    }
  ];
}
