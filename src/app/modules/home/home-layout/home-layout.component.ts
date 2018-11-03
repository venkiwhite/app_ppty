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

  displaySearchPage = false ;
  searchResults;

  constructor(private dataServiceService: DataServiceService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.dataServiceService.getProjects('trending').subscribe( (response) => {
      this.trendingProjects = new ProjectGroup('Trending Projects', response.data, response.page);
    });
    this.dataServiceService.getProjects('featured').subscribe( (response) => {
      this.featuredProjects = new ProjectGroup('Featured Projects', response.data, response.page);
    });
  }

  onSearch(event) {
    this.displaySearchPage = event.flag;
    this.showSearchResults(event.value);
  }

  showSearchResults(value) {
    this.dataServiceService.getSearchResults(value).subscribe( (response) => {
      this.searchResults = response;
    });
  }

}

class ProjectGroup {
  title;
  data;
  page;
  constructor(title, data, page) {
    this.title = title;
    this.data = data;
    this.page = page;
  }
}
