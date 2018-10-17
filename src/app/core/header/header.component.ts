import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  customerCareNumber;

  constructor() {
    this.customerCareNumber = '1800-265-6565';
  }

  ngOnInit() {
  }

}
