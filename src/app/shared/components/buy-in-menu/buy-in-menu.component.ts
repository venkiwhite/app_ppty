import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-in-menu',
  templateUrl: './buy-in-menu.component.html',
  styleUrls: ['./buy-in-menu.component.scss']
})
export class BuyInMenuComponent implements OnInit {

  location;
  availableLocationArray;

  constructor() {
    this.availableLocationArray = ['Bangalore', 'Coimbatore', 'Chennai'];
    this.location = this.availableLocationArray[0];
  }

  ngOnInit() {
  }

}
