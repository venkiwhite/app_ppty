import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {
  enquiryForm: FormGroup;


  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.enquiryForm = this.fb.group({
      fullName: ['', Validators.required],
      emailID: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      others: [''],
      siteVisit: ['']
    })
  }

  onSubmitClick(): void {
    this.dialogRef.close(this.enquiryForm.value);
  }

  cancel() {
    this.dialogRef.close();
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
