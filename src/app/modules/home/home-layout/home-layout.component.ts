import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {


  trendingProjects: ProjectGroup;
  featuredProjects: ProjectGroup;

  constructor() {
    this.trendingProjects = new ProjectGroup('Trending Projects', []);
    this.featuredProjects = new ProjectGroup('Featured Projects', []);
   }

  ngOnInit() {
    console.log('conponent init..');
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
