import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../../shared/modules/shared/shared.module';



import { DetailsRoutingModule } from './details-routing.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';


@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [PropertyDetailsComponent]
})
export class DetailsModule { }
