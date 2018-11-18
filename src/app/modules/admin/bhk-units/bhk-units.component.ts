import { Component, OnInit,ViewChild, ViewEncapsulation,Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource,MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Bhk_units } from './../../../core/models/bhk_units';

import { DataServiceService } from './../../../shared/services/data-service.service'


const BHK_UNITS_DATA: Bhk_units   [] = [
  {
    id: "123",
    name: "Lift 1 ",
    description: "Lift facilities"
  },
  {
    id: "456",
    name: "Swimming pool 1",
    description: "Swimming pool facilities"
  }
]

@Component({
  selector: 'app-bhk-units',
  templateUrl: './bhk-units.component.html',
  styleUrls: ['./bhk-units.component.scss']
})
export class BhkUnitsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<Bhk_units>(BHK_UNITS_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  name: string;
  description: string;
  

  constructor( public dialog: MatDialog, private dataService: DataServiceService ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BhkUnitsDialog,{
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
  selector: 'bhk-units-dialog',
  templateUrl:'bhk-units-dialog.html',
})

export class BhkUnitsDialog {

  constructor(public dialogRef: MatDialogRef<BhkUnitsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Bhk_units) {

  }

  cancel(): void {
    this.dialogRef.close();
  }
  

}
