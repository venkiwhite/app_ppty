import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {

  house_details;
  constructor() { }

  ngOnInit() {

    this.house_details = 
    [
      {
        "details" : [
          {
            "title": "50000 Sq Ft",
            "category": "unit-area"
          },
          {
            "title": "5 bathrooms",
            "category": "bathroom",
          },
          {
            "title": "4 bedrooms",
            "category": "bedroom"
          }
        ]
      },
      {
        "details" : [
          {
            "title": "1500 Sq Ft",
            "category": "unit-area"
          },
          {
            "title": "1 bathroom",
            "category": "bathroom",
          },
          {
            "title": "1 bedroom",
            "category": "bedroom"
          }
        ]
      },
      {
        "details" : [
          {
            "title": "2000 Sq Ft",
            "category": "unit-area"
          },
          {
            "title": "2 bathrooms",
            "category": "bathroom",
          },
          {
            "title": "2 bedrooms",
            "category": "bedroom"
          }
        ]
      },
      {
        "details" : [
          {
            "title": "2500 Sq Ft",
            "category": "unit-area"
          },
          {
            "title": "2 bathrooms",
            "category": "bathroom",
          },
          {
            "title": "3 bedrooms",
            "category": "bedroom"
          }
        ]
      }
    ]
    ;
  }

  getStyle(title) {
    return 'ply-icon-custom-' + title.replace(/ /g,'-').toLowerCase();
  }

}
