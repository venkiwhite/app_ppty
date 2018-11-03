import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom Modules
import { SharedModule } from './../../shared/modules/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProjectGroupComponent } from './project-group/project-group.component';
import { ReviewCardComponent} from './../../core/review-card/review-card.component';
import { ProjectCardComponent } from './../../shared/components/project-card/project-card.component';
import { TitleCardComponent } from './../../shared/components/title-card/title-card.component';
import { ProjectTabComponent } from './project-tab/project-tab.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [HomeLayoutComponent, SearchBarComponent,
    SearchPageComponent, ProjectGroupComponent, ReviewCardComponent, ProjectCardComponent, TitleCardComponent, ProjectTabComponent]
})
export class HomeModule { }
