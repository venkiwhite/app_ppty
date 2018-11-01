import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Custom Modules
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { AgmCoreModule } from '@agm/core';

import { DetailsRoutingModule } from './details-routing.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtdYPAH703QXocVx3QFpeMVsxkOX0uJnU'
    })
  ],
  declarations: [PropertyDetailsComponent, ImageSliderComponent]
})
export class DetailsModule { }
