import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  enquiryForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.enquiryForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      others: ['']
    })
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
