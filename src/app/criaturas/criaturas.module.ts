import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriaturasRoutingModule } from './criaturas-routing.module';
import { CriaturasComponent } from './criaturas.component';


@NgModule({
  declarations: [
    CriaturasComponent
  ],
  imports: [
    CommonModule,
    CriaturasRoutingModule
  ]
})
export class CriaturasModule { }
