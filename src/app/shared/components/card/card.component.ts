import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @ContentChild('cardBody', { static: false }) cardBody: TemplateRef<any> | null = null;

  @Input() value: any;
}
