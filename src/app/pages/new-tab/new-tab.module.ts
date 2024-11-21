import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTabPageRoutingModule } from './new-tab-routing.module';

import { NewTabPage } from './new-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTabPageRoutingModule
  ],
  declarations: [NewTabPage]
})
export class NewTabPageModule {}
