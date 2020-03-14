import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddworkerPageRoutingModule } from './addworker-routing.module';

import { AddworkerPage } from './addworker.page';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddworkerPageRoutingModule
  ],
  declarations: [AddworkerPage]
})
export class AddworkerPageModule {}
