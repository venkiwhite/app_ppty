import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from './../../../shared/services/data-service.service';


@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrls: ['./project-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ProjectTabComponent implements OnInit {
  projectList: any;

  constructor(private dataServiceService: DataServiceService) { 
    this.projectList = {
      tab_one: [],
      tab_two: [],
      tab_three: [],
      tab_four: [],
      tab_five: []
    }
  }

  ngOnInit() {

    this.dataServiceService.getTabsProjects('tab-one').subscribe( (response) => {
      this.projectList.tab_one = response.data;
    });
    this.dataServiceService.getTabsProjects('tab-two').subscribe( (response) => {
      this.projectList.tab_two = response.data;
    });
    this.dataServiceService.getTabsProjects('tab-three').subscribe( (response) => {
      this.projectList.tab_three = response.data;
    });
  }

}
