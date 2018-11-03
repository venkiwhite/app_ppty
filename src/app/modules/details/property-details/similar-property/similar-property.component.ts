import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-property',
  templateUrl: './similar-property.component.html',
  styleUrls: ['./similar-property.component.scss']
})
export class SimilarPropertyComponent implements OnInit {

  simListings = [];

  constructor() { }

  ngOnInit() {

    this.simListings = [
      {
        img: "/assets/images/1.jpg",
        details: "Details 1"
      },
      {
        img: "/assets/images/2.jpg",
        details: "Details 2"
      },
      {
        img: "/assets/images/3.jpg",
        details: "Details 3"
      }
    ]
  }

}
