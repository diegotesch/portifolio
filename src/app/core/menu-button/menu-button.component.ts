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
  showMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
    this.openCloseMenu.emit(this.menuIsOpen ? 'open' : 'close');
  }

  @HostListener('document:click', ['$event'])
  closeMenu(e: any): void {
    const clickedInside = this._el.nativeElement.contains(e.target);
    const sidebarClick = /sidebar /.test(e.target.classList.value);
    if (!clickedInside && !sidebarClick && this.menuIsOpen) this.showMenu();
  }
}
