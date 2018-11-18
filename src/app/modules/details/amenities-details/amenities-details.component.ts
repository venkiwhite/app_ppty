import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.component.html',
  styleUrls: ['./amenities-details.component.scss']
})
export class AmenitiesDetailsComponent implements OnInit {

  amenities: any;
  constructor() { }

  ngOnInit() {
    this.amenities = [
      {
        "title": "Swimming Pool"
      },
      {
        "title": "Gym"
      }, {
        "title": "Security"
      }, {
        "title": "Lift"
      }
    ]
  }

  getStyle(title) {
    return 'ply-icon-' + title.replace(/ /g,'-').toLowerCase() + '-trans';
  }
}
