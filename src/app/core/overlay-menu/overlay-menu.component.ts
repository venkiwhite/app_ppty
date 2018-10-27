import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fadeInOut } from 'src/app/shared/animations/animations';
@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.scss'],
  animations: [fadeInOut]
})
export class OverlayMenuComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.close.emit();
  }


}
