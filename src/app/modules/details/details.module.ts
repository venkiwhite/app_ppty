import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  declarations: [PropertyDetailsComponent]
})
export class DetailsModule { }
