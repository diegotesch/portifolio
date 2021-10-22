import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardComponent } from './components/card/card.component';
import { ImageDefaultErrorDirective } from './directives/image-default-error.directive';

@NgModule({
  declarations: [
    ImageDefaultErrorDirective,
    CardComponent,
    CardButtonComponent,
    CardDetailComponent
  ],
  imports: [CommonModule],
  exports: [ImageDefaultErrorDirective, CardComponent, CardButtonComponent, CardDetailComponent]
})
export class SharedModule {}
