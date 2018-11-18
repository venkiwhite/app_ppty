import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from "@angular/forms";

// Custom Modules
import { SharedModule } from './shared/modules/shared/shared.module';
import { AdminModule } from './modules/admin/admin.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BuyInMenuComponent } from './shared/components/buy-in-menu/buy-in-menu.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BannerMenuComponent } from './shared/components/banner/banner-menu/banner-menu.component';
import { BannerWindowComponent } from './shared/components/banner/banner-window/banner-window.component';

// Services
import { DataServiceService } from './shared/services/data-service.service';
import { OverlayMenuComponent } from './core/overlay-menu/overlay-menu.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { AdminLayoutComponent } from './core/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './core/admin-layout/admin-header/admin-header.component';
import { AdminMenuComponent } from './core/admin-layout/admin-menu/admin-menu.component';
import { CopyrightPanelComponent } from './shared/components/copyright-panel/copyright-panel.component';
// import { ModalPopupComponent } from './shared/components/modal-popup/modal-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuyInMenuComponent,
    BannerComponent,
    BannerMenuComponent,
    BannerWindowComponent,
    OverlayMenuComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    CopyrightPanelComponent
    // ModalPopupComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
