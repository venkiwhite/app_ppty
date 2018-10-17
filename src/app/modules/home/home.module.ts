import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TestimonialsGroupComponent } from './testimonials-group/testimonials-group.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProjectGroupComponent } from './project-group/project-group.component';
import { ReviewCardComponent} from './../../core/review-card/review-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [TestimonialsGroupComponent, HomeLayoutComponent, SearchBarComponent,
    SearchPageComponent, ProjectGroupComponent, ReviewCardComponent]
})
export class HomeModule { }
