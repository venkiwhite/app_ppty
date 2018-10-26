import { Component, OnInit } from '@angular/core';
import { WindowScrollingService } from './../../../services/window-scrolling/window-scrolling.service';
import { fadeInOut } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-banner-menu',
  templateUrl: './banner-menu.component.html',
  styleUrls: ['./banner-menu.component.scss'],
  animations: [fadeInOut]
})
export class BannerMenuComponent implements OnInit {

  showOverlayMenu = false;

  constructor(private windowScrollingService: WindowScrollingService) { }

  ngOnInit() {
  }

  toggleMenu(value: boolean) {
    this.showOverlayMenu = value;
    value === true ? this.windowScrollingService.disable() : this.windowScrollingService.enable();
  }

}
