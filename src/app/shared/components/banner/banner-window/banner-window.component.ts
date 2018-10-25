import { Component, OnInit } from '@angular/core';
import { BannerServiceService } from './../../../services/banner-services/banner-service.service';

@Component({
  selector: 'app-banner-window',
  templateUrl: './banner-window.component.html',
  styleUrls: ['./banner-window.component.scss']
})
export class BannerWindowComponent implements OnInit {

  projectList;
  displayedData;

  constructor(private bannerServiceService: BannerServiceService) { }

  ngOnInit() {
    this.getBannerWindowProjects();
  }

  getBannerWindowProjects() {
    if (!this.bannerServiceService.storedResponse.bannerWindowProjectList) {
      return this.bannerServiceService.getBannerWindowProjects().subscribe( (response) => {
        this.projectList = response;
        console.log('called service', this.projectList);
        this.displayedData = this.projectList[0];
      });
    } else {
      this.projectList = this.bannerServiceService.storedResponse.bannerWindowProjectList;
      this.displayedData = this.projectList[0];
    }
  }

}
