import { Component, OnInit, ViewChild, ViewEncapsulation,Inject} from '@angular/core';
import { MatPaginator, MatTableDataSource,MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Specifications } from './../../../core/models/specifications';
import { templateJitUrl } from '@angular/compiler';

import { DataServiceService } from './../../../shared/services/data-service.service'

const SPECIFICATIONS_DATA: Specifications   [] = [
  {
    id: "123",
    name: "Lift",
    description: "Lift facilities"
  },
  {
    id: "456",
    name: "Swimming pool",
    description: "Swimming pool facilities"
  }
]

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss']
})

export class SpecificationsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<Specifications>(SPECIFICATIONS_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  name: string;
  description: string;
  


  constructor(public dialog: MatDialog, private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SpecificationDialog,{
      width:'250px',
      data: {name: this.name, description:this.description}
    });

    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;

      console.log(result);

      this.dataService.createAminity(result)
        .subscribe(response => {
          console.log('response ', response);
        }, 
        error => {
          console.log('error ', error);
        })
    });
  }

}

@Component({
  selector: 'specification-dialog',
  templateUrl:'specification-dialog.html',
})

export class SpecificationDialog {

  constructor(public dialogRef: MatDialogRef<SpecificationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Specifications) {

  }

  cancel(): void {
    this.dialogRef.close();
  }
  
}












