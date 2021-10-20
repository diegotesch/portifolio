import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriaturasComponent } from './criaturas.component';

const routes: Routes = [{ path: '', component: CriaturasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriaturasRoutingModule {}
