import { Component, OnInit, ViewChild, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ModalPopupComponent } from '../../../shared/components/modal-popup/modal-popup.component';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyDetailsComponent implements OnInit {

  ELEMENT_DATA = [
    { UnitArea: '2BHK', Area: '740 Sq ft', BasicPrice: '47 Lakhs', Action: 'Enquire Now' },
    { UnitArea: '2BHK', Area: '870 Sq ft', BasicPrice: '55 Lakhs', Action: 'Enquire Now' },
    { UnitArea: '3BHK', Area: '1100 Sq ft', BasicPrice: '78 Lakhs', Action: 'Enquire Now' },
    { UnitArea: '4BHK', Area: '1800 Sq ft', BasicPrice: '1.2 Crores', Action: 'Enquire Now' }
  ];

  @ViewChild(MatSort) sort: MatSort;
  imgLoaded: Boolean;
  displayedColumns = ['UnitArea', 'Area', 'BasicPrice', 'Action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  lat: number = 12.927923;
  lng: number = 77.627106;
  markerIcon = "assets/images/hexagonal.png";

  previewLargeImage;
  sliderMedia;
  isLastThumbnail: Boolean;
  slideImageHTML;
  constructor(public dialog: MatDialog) {
    this.sliderMedia = [];
    this.isLastThumbnail = false;
    this.imgLoaded = false;
    this.slideImageHTML = '';
  }

  ngOnInit() {

    this.previewLargeImage = {};

    this.sliderMedia = [
      {
        title: 'Slide 1',
        thumnail: '/assets/images/slider/thumbnail/1.jpg',
        largeMediaPath: '/assets/images/slider/large_images/1.jpg',
        largeMediaType: 'image'
      },
      {
        title: 'Slide 2',
        thumnail: '/assets/images/slider/thumbnail/2.jpg',
        largeMediaPath: '/assets/images/slider/large_images/2.jpg',
        largeMediaType: 'image'
      },
      {
        title: 'Slide 3',
        thumnail: '/assets/images/slider/thumbnail/3.jpg',
        largeMediaPath: '/assets/images/slider/large_images/3.jpg',
        largeMediaType: 'image'
      },
      {
        title: 'Slide 4',
        thumnail: '/assets/images/slider/thumbnail/4.jpg',
        largeMediaPath: '/assets/images/slider/large_images/4.jpg',
        largeMediaType: 'image'
      },
      {
        title: 'Slide 5',
        thumnail: '/assets/images/slider/thumbnail/5.jpg',
        largeMediaPath: '/assets/images/slider/videos/1.mp4',
        largeMediaType: 'video'
      },
      {
        title: 'Slide 6',
        thumnail: '/assets/images/slider/thumbnail/6.jpg',
        largeMediaPath: '/assets/images/slider/large_images/6.jpg',
        largeMediaType: 'image'
      },
      {
        title: 'Slide 7',
        thumnail: '/assets/images/slider/thumbnail/7.jpg',
        largeMediaPath: '/assets/images/slider/large_images/7.jpg',
        largeMediaType: 'image'
      },
      {
        title: 'Slide 8',
        thumnail: '/assets/images/slider/thumbnail/8.jpg',
        largeMediaPath: '/assets/images/slider/large_images/8.jpg',
        largeMediaType: 'image'
      },
      {
        title: 'Slide 9',
        thumnail: '/assets/images/slider/thumbnail/9.jpg',
        largeMediaPath: '/assets/images/slider/large_images/9.jpg',
        largeMediaType: 'image'
      }

    ]

    this.previewLargeImage = this.sliderMedia[0];
    setTimeout(() => {
      this.isLastThumbnail = true;
    }, 1000 * 5)

    this.imgLoaded = true;

    this.sliderMedia.forEach(element => {
      this.slideImageHTML += `<img drag-scroll-item src="/assets/images/2.jpg"  (click)="previewLarge('assets/images/2.jpg')"/>`
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }




  previewLarge(img) {
    this.previewLargeImage = img;
  }

  // showEnquiryForm(data) {
  //   console.log(data);
  // }

  openEnquiryFormDialog(data): void {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '370px',
      // height: '589px',
      panelClass: 'enquiryFormContainer',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
