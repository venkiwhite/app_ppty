import { Component, OnInit } from '@angular/core';
import { BannerServiceService } from './../../../services/banner-services/banner-service.service';
import { PaginationInputData } from 'src/app/core/models/models';

@Component({
  selector: 'app-banner-window',
  templateUrl: './banner-window.component.html',
  styleUrls: ['./banner-window.component.scss']
})
export class BannerWindowComponent implements OnInit {

  projectList;
  paginationData: PaginationInputData;

  constructor(private bannerServiceService: BannerServiceService) { }

  ngOnInit() {
    this.getBannerWindowProjects(1);
  }

  getBannerWindowProjects(page) {
    if (!this.bannerServiceService.storedResponse.bannerWindowProjectList[page]) {
      console.log('calling service getBannerWindowProjects', page);
      return this.bannerServiceService.getBannerWindowProjects(page).subscribe((response) => {
        this.bannerServiceService.storedResponse.bannerWindowProjectList[page] = response;
        this.updateData(response['data']);
        this.updatePaginationInputData(response['page']);
      });
    } else {
      const storedData = this.bannerServiceService.storedResponse.bannerWindowProjectList[page];
      console.log('using storedData', storedData);
      this.updateData(storedData['data']);
      this.updatePaginationInputData(storedData['page']);
    }
  }

  updateData(data) {
    this.projectList = data;
  }

  updatePaginationInputData(page) {
    this.paginationData = {
      currentPage: page.currentPage,
      maxValue: page.maxValue
    };
  }
}
