import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    CoreModule
  ]
})
export class FrontModule { }
