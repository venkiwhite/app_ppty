import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Custom Modules
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { AgmCoreModule } from '@agm/core';

import { DetailsRoutingModule } from './details-routing.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';


@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtdYPAH703QXocVx3QFpeMVsxkOX0uJnU'
    })
  ],
  declarations: [PropertyDetailsComponent]
})
export class DetailsModule { }
