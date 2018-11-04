import { Component, OnInit, ViewChild, ViewEncapsulation,Inject} from '@angular/core';
import { MatPaginator, MatTableDataSource,MatDialog,MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { Amenity } from './../../../core/models/amenity';
import { templateJitUrl } from '@angular/compiler';

import { DataServiceService } from './../../../shared/services/data-service.service'

const AMENITY_DATA: Amenity   [] = [
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
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
  
})

export class AmenitiesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<Amenity>(AMENITY_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  name: string;
  description: string;

  constructor( public dialog: MatDialog, private dataService: DataServiceService ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AmenitiesDialog,{
      width:'250px',
      data: {name: this.name, description:this.description}
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed')

      console.log(result);

      this.dataService.createAminity(result)
      .subscribe(response =>{
        console.log('response',response);

      },
      error =>{
       console.log('error',error);

      })
    
    });
  }

}

@Component({
  selector: 'amenities-dialog',
  templateUrl:'amenities-dialog.html',
})

export class AmenitiesDialog {

  constructor(public dialogRef: MatDialogRef<AmenitiesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Amenity) {

  }

  cancel(): void {
    this.dialogRef.close();
  }
  
}
