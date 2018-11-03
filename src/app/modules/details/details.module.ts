import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Custom Modules
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { AgmCoreModule } from '@agm/core';

import { DetailsRoutingModule } from './details-routing.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

import { OwlModule } from 'ngx-owl-carousel';
import { SimilarPropertyComponent } from './property-details/similar-property/similar-property.component';
import { AmenitiesDetailsComponent } from './amenities-details/amenities-details.component';


@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtdYPAH703QXocVx3QFpeMVsxkOX0uJnU'
    })
  ],
  declarations: [PropertyDetailsComponent, ImageSliderComponent, SimilarPropertyComponent, AmenitiesDetailsComponent]
})
export class DetailsModule { }
