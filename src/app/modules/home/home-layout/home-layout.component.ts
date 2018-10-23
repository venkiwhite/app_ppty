import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../../shared/services/data-service.service';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {


  trendingProjects: ProjectGroup;
  featuredProjects: ProjectGroup;

  constructor(private dataServiceService: DataServiceService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.dataServiceService.getProjects('trending').subscribe( (response) => {
      this.trendingProjects = new ProjectGroup('Trending Projects', response);
    });
    this.dataServiceService.getProjects('featured').subscribe( (response) => {
      this.featuredProjects = new ProjectGroup('Featured Projects', response);
    });
  }

}

class ProjectGroup {
  title;
  data;
  constructor(title, data) {
    this.title = title;
    this.data = data;
  }
}
