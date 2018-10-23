import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Custom Modules
import { SharedModule } from './../../shared/modules/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { TestimonialsGroupComponent } from './testimonials-group/testimonials-group.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProjectGroupComponent } from './project-group/project-group.component';
import { ReviewCardComponent} from './../../core/review-card/review-card.component';
import { ProjectCardComponent } from './../../shared/components/project-card/project-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [TestimonialsGroupComponent, HomeLayoutComponent, SearchBarComponent,
    SearchPageComponent, ProjectGroupComponent, ReviewCardComponent, ProjectCardComponent]
})
export class HomeModule { }
