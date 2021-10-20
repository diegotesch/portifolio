import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(0)' })),
      state('close', style({ transform: 'translateX(-100%)' })),
      transition('* <=> *', animate('.5s'))
    ])
  ]
})
export class AppComponent {
  menuState = 'oepn';

  showMenu() {
    this.menuState = this.menuState === 'close' ? 'open' : 'close';
  }
}
