import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTabPage } from './new-tab.page';

const routes: Routes = [
  {
    path: '',
    component: NewTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTabPageRoutingModule {}
