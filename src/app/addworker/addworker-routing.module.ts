import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddworkerPage } from './addworker.page';

const routes: Routes = [
  {
    path: '',
    component: AddworkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddworkerPageRoutingModule {}
