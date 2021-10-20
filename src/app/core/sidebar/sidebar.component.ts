import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(0)' })),
      state('close', style({ transform: 'translateX(-100%)' })),
      transition('* <=> *', animate('.5s'))
    ])
  ]
})
export class SidebarComponent {
  @Input() menuState = 'close';

  @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();
}
