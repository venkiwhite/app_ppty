import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { DetailsRoutingModule } from './details-routing.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';


@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PropertyDetailsComponent]
})
export class DetailsModule { }
