import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PaginationEmitter, PaginationInputData } from 'src/app/core/models/models';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() inputData: PaginationInputData;
  @Output() clicked  = new EventEmitter();
  currentPage = 1;

  constructor() { }

  ngOnInit() {
    // console.log(this.inputData);
    this.currentPage = this.inputData.currentPage;
  }

  ngOnChanges() {
    // console.log('ngOnChanges', this.inputData, this.currentPage);
  }

  /**
   * Emits the updated page to Parent
   * @param value PaginationEmitter = previous | next
   */
  emitEvent(value: PaginationEmitter) {
    if (value === 'previous') {
      this.currentPage = this.currentPage === 1 ? 1 : this.currentPage - 1;
    } else {
      this.currentPage = this.currentPage === this.inputData.maxValue ? this.inputData.maxValue : this.currentPage + 1;
    }
    this.clicked.emit(this.currentPage);
  }

}

