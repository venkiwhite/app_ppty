import { Component, OnInit, Input } from '@angular/core';
import { PaginationInputData } from 'src/app/core/models/models';

@Component({
  selector: 'app-project-group',
  templateUrl: './project-group.component.html',
  styleUrls: ['./project-group.component.scss']
})
export class ProjectGroupComponent implements OnInit {

  @Input() inputData;
  projectCards = [];
  paginationData: PaginationInputData;
  currentPage = 0;

  constructor() { }

  ngOnInit() {
    this.projectCards = this.inputData.data;
    this.updatePaginationInputData(this.inputData.page);
  }

  changePage(pagination) {
    this.updateCurrentPage(pagination);
  }

  updatePaginationInputData(page) {
    this.updateCurrentPage(page.current);
    this.paginationData = {
      currentPage: page.currentPage,
      maxValue: page.maxValue
    };
  }

  updateCurrentPage(value) {
    this.currentPage = value;
  }


}
