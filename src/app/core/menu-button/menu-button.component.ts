import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
  @Output() openCloseMenu: EventEmitter<string> = new EventEmitter<string>();

  private menuIsOpen = false;

  constructor(private _el: ElementRef) {}

  @HostListener(`click`, ['$event'])
  showMenu(e: Event): void {
    this.menuIsOpen = !this.menuIsOpen;
    this.openCloseMenu.emit(this.menuIsOpen ? 'open' : 'close');
  }
}
