import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  enquiryForm: FormGroup;

  ELEMENT_DATA = [
    { UnitArea: '2BHK', Area: '740 Sq ft', BasicPrice: '47 Lakhs', Action: 'Enquire Now' },
    { UnitArea: '2BHK', Area: '870 Sq ft', BasicPrice: '55 Lakhs', Action: 'Enquire Now' },
    { UnitArea: '3BHK', Area: '1100 Sq ft', BasicPrice: '78 Lakhs', Action: 'Enquire Now' },
    { UnitArea: '4BHK', Area: '1800 Sq ft', BasicPrice: '1.2 Crores', Action: 'Enquire Now' }
  ];

  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['UnitArea', 'Area', 'BasicPrice', 'Action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.enquiryForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      others: ['']
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  get eForm() {
    return this.enquiryForm.controls;
  }

  onSubmit() {

    if (this.enquiryForm.invalid) {
      return false;
    } else {
      return true;
    }

  }






}
