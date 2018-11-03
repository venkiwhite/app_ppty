import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PaginationInputData } from 'src/app/core/models/models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnChanges {

  @Input() inputData;
  projectCards = [];
  paginationData: PaginationInputData;
  currentPage = 0;

  constructor() { }

  ngOnInit() {
    // console.log(this.inputData);
    this.projectCards = this.inputData.data;
    this.updatePaginationInputData(this.inputData.page);
  }

  ngOnChanges() {
    console.log(this.inputData);
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
