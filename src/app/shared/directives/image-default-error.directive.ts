import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[default]'
})
export class ImageDefaultErrorDirective {
  @Input() default = '';

  constructor(private _el: ElementRef) {}

  @HostListener('error')
  loadDefaultImage() {
    const el: HTMLImageElement = <HTMLImageElement>this._el.nativeElement;
    el.src = this.default || '/assets/images/player-default.png';
  }
}
