import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchParameters = new EventEmitter();

  selectedMode = {
    sliderValue: 0,
    displayValue: 'buy'
  };

  searchForm = new FormGroup({
    locality: new FormControl(''),
    minPrice: new FormControl(''),
    maxPrice: new FormControl(''),
    bhk: new FormControl(''),
    propertyType: new FormControl(''),
    status: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.searchParameters.emit({ flag: true, value: this.searchForm.value });
  }

  onClear() {
    this.searchForm.reset();
    this.searchParameters.emit({ flag: false, value: null });
  }

  onModeChange(event) {
    switch (event.value) {
      case 0:
        this.setSelectedMode(0, 'buy');
        break;
      case 1:
      this.setSelectedMode(1, 'any');
        break;
      case 2:
      this.setSelectedMode(2, 'rent');
        break;
      default:
        break;
    }
  }

  setSelectedMode(sliderValue, displayValue) {
    this.selectedMode = {
      sliderValue: sliderValue,
      displayValue: displayValue
    };
  }
}
