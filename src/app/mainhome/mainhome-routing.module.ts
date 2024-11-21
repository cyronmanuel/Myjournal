import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainhomePage } from './mainhome.page';

const routes: Routes = [
  {
    path: '',
    component: MainhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainhomePageRoutingModule {}
