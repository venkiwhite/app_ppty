import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

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

  // locality = new FormControl();
  // options: string[] = ['Locality One', 'Locality Two', 'Locality Three'];
  // filteredLocality: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    // this.filteredLocality = this.locality.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value))
    //   );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.searchForm.value);
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
